import { Component, Host, Prop, h } from '@stencil/core';
import * as d3 from 'd3'
import { SparqlBinding, sparqlJson } from '../../lib/sparqlJson';

const qrEntityStatements_out = (pkEntity: string) => `
  PREFIX geov: <http://geovistory.org/resource/>

  SELECT ?subjectClass ?property ?object ?objectClass
  WHERE {
    geov:${pkEntity} ?property ?object .
    geov:${pkEntity} a ?subjectClass .
    ?object a ?objectClass .
  }
`;

const qrEntityStatements_in = (pkEntity: string) => `
  PREFIX geov: <http://geovistory.org/resource/>

  SELECT ?subject ?subjectClass ?property ?objectClass
  WHERE {
    ?subject ?property geov:${pkEntity} .
    geov:${pkEntity} a ?objectClass .
    ?subject a ?subjectClass .
  }
`;

type SparqlResponse = {
  subject: SparqlBinding,
  subjectClass: SparqlBinding,
  property: SparqlBinding,
  object: SparqlBinding,
  objectClass: SparqlBinding
}

type Triple = {
  subject: string,
  subjectClass: string,
  property: string,
  object: string,
  objectClass: string
}

@Component({
  tag: 'geov-graph',
  styleUrl: 'geov-graph.css',
  shadow: false,
})
export class GeovGraph {

  @Prop() sparqlEndpoint: string = "https://sparql.geovistory.org/api_v1_community_data";
  @Prop() width: number = 1500;
  @Prop() height: number = 750;
  @Prop() pkEntity: string = "i80974";

  triples: Array<Triple> = [];

  simulation: any;
  nodes: Array<any> = []
  links: Array<any> = []

  colors: { [key: string]: string } = {}

  componentDidRender() {

    this.getGraph(this.pkEntity).then(triples => {
      this.drawPreparation(triples)
      this.draw()
    })
  }

  render() {
    return (
      <Host>
        <div id="graph"></div>
      </Host>
    );
  }


  draw() {

    // On first draw, create simulation
    if (this.simulation == undefined) {
      this.simulation = d3.forceSimulation(this.nodes)
        .force("center", d3.forceCenter(this.width / 2, this.height / 2))
        .force("link", d3.forceLink(this.links).id(d => d.id).strength(1).distance(150))
        .force("charge", d3.forceManyBody().strength(-10000))
        .restart()
        .alphaDecay(0.3);
    } else {
      this.simulation.nodes(this.nodes)
        .force('link', d3.forceLink(this.links).id(d => d.id))
        .restart()
    }

    const svg = d3.create('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

    let nodes = svg.selectAll('g').data(this.nodes)
    let links = svg.selectAll('line').data(this.links)

    const enterNodes = nodes.enter().append('g')

    enterNodes
      .append('circle')
      .attr("stroke", "#FFF")
      .attr("stroke-width", 0.2)
      .attr("class", "node")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", d => d.r || 5)//make this one of three sizes
      .attr("fill", d => d.color)
      .call(this.drag(this.simulation))
      .on('click', (_, e) => {
        this.getGraph(e.id).then(triples => {
          this.drawPreparation(triples)
          this.draw()
        })
      })

    enterNodes
      .append('text')
      .text(d => d.id)
      .style('fill', '#000')
      .style('font-size', '12px')
      .attr('x', d => d.x)
      .attr('y', d => d.y);

    const enterLinks = links.enter().append('line').lower()
      .attr("stroke", "#000")
      .attr("stroke-opacity", 1)
      .attr("stroke-width", 3)
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y)

    nodes = nodes.merge(enterNodes);
    links = links.merge(enterLinks);

    this.simulation.on('tick', () => {
      links
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y)

      nodes
        // .attr("cx", d => d.x)
        // .attr("cy", d => d.y)
        .attr('transform', d => `translate(${d.x},${d.y})`);
    })

    document.getElementById('graph').replaceChildren(svg.node())
  }


  drag(simulation) {
    const dragStarted = (event) => {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
    const dragged = (event) => {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    const dragended = (event) => {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return d3.drag()
      .on('start', dragStarted)
      .on('drag', dragged)
      .on('end', dragended)
  }

  async getGraph(pkEntity: string): Promise<Array<Triple>> {
    const triples = [...await this.getOutgoing(pkEntity), ...await this.getIncoming(pkEntity)]
    // this.triples.push(...triples);
    return triples
  }

  async getOutgoing(pkEntity: string): Promise<Array<Triple>> {
    const res = await sparqlJson<SparqlResponse>(this.sparqlEndpoint, qrEntityStatements_out(pkEntity))

    const newTriples = res?.results?.bindings.map(e => ({
      subject: pkEntity,
      subjectClass: e.subjectClass.value.substring(e.subjectClass.value.lastIndexOf('/') + 1),
      property: e.property.value.substring(e.property.value.lastIndexOf('/') + 1),
      object: e.object.value.substring(e.object.value.lastIndexOf('/') + 1),
      objectClass: e.objectClass.value.substring(e.objectClass.value.lastIndexOf('/') + 1)
    }))

    return newTriples
  }

  async getIncoming(pkEntity: string): Promise<Array<Triple>> {
    const res = await sparqlJson<SparqlResponse>(this.sparqlEndpoint, qrEntityStatements_in(pkEntity))

    const newTriples = res?.results?.bindings.map(e => ({
      subject: e.subject.value.substring(e.subject.value.lastIndexOf('/') + 1),
      subjectClass: e.subjectClass.value.substring(e.subjectClass.value.lastIndexOf('/') + 1),
      property: e.property.value.substring(e.property.value.lastIndexOf('/') + 1),
      object: pkEntity,
      objectClass: e.objectClass.value.substring(e.objectClass.value.lastIndexOf('/') + 1)
    }))

    return newTriples
  }

  drawPreparation(triples: Array<Triple>) {

    // this.links = []

    triples.forEach(triple => {

      // Set class colors
      if (!(triple.subjectClass in this.colors)) {
        this.colors[triple.subjectClass] = '#' + Math.floor(Math.random() * 16777215).toString(16);
      }
      if (!(triple.objectClass in this.colors)) {
        this.colors[triple.objectClass] = '#' + Math.floor(Math.random() * 16777215).toString(16);
      }

      let subject = {
        id: triple.subject,
        class: triple.subjectClass,
        r: 40,
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        color: this.colors[triple.subjectClass]
      }

      let object = {
        id: triple.object,
        class: triple.objectClass,
        r: 40,
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        color: this.colors[triple.objectClass]
      }

      // If the subject is not yet in the nodes, add it
      if (!this.nodes.some(node => node.id == subject.id)) this.nodes.push(subject)

      // If the object is not yet in the nodes, add it
      if (!this.nodes.some(node => node.id == object.id)) this.nodes.push(object)

      // Add all the links
      this.links.push({
        source: subject.id,
        target: object.id,
        value: 1
      })
    })

    console.log(this.links)
  }
}