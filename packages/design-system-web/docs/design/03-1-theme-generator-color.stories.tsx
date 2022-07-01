export default {
  title: 'Design/Theme Generator'
}

export const Colors2 = () => `

<SketchPicker />

<h1>Colors</h1>

<style>
	.title { width: 150px; height: 30px; text-align: center; }
	.box { width: 150px; height: 30px; }
</style>

<table style="border-collapse: separate; border-spacing: 5px;">
	<tr>
		<th class="title"></th>
		<th class="title">Primary</th>
		<th class="title">Secondary</th>
		<th class="title">Tertiary</th>
		<th class="title">Success</th>
		<th class="title">Warning</th>
		<th class="title">Danger</th>
		<th class="title">Dark</th>
		<th class="title">Medium</th>
		<th class="title">Light</th>
	</tr>
	<tr style="height:50px">
		<th class="title">Normal</th>
		<td class="box" style="background:var(--ion-color-primary);"></td>
		<td class="box" style="background:var(--ion-color-secondary);"></td>
		<td class="box" style="background:var(--ion-color-tertiary);"></td>
		<td class="box" style="background:var(--ion-color-success);"></td>
		<td class="box" style="background:var(--ion-color-warning);"></td>
		<td class="box" style="background:var(--ion-color-danger);"></td>
		<td class="box" style="background:var(--ion-color-dark);"></td>
		<td class="box" style="background:var(--ion-color-medium);"></td>
		<td class="box" style="background:var(--ion-color-light);"></td>
	</tr>
	<tr style="height:50px">
		<th class="title">Shade</th>
		<td class="box" style="background:var(--ion-color-primary-shade);"></td>
		<td class="box" style="background:var(--ion-color-secondary-shade);"></td>
		<td class="box" style="background:var(--ion-color-tertiary-shade);"></td>
		<td class="box" style="background:var(--ion-color-success-shade);"></td>
		<td class="box" style="background:var(--ion-color-warning-shade);"></td>
		<td class="box" style="background:var(--ion-color-danger-shade);"></td>
		<td class="box" style="background:var(--ion-color-dark-shade);"></td>
		<td class="box" style="background:var(--ion-color-medium-shade);"></td>
		<td class="box" style="background:var(--ion-color-light-shade);"></td>
	</tr>
	<tr style="height:50px">
		<th>Tint</th>
		<td class="box" style="background:var(--ion-color-primary-tint);"></td>
		<td class="box" style="background:var(--ion-color-secondary-tint);"></td>
		<td class="box" style="background:var(--ion-color-tertiary-tint);"></td>
		<td class="box" style="background:var(--ion-color-success-tint);"></td>
		<td class="box" style="background:var(--ion-color-warning-tint);"></td>
		<td class="box" style="background:var(--ion-color-danger-tint);"></td>
		<td class="box" style="background:var(--ion-color-dark-tint);"></td>
		<td class="box" style="background:var(--ion-color-medium-tint);"></td>
		<td class="box" style="background:var(--ion-color-light-tint);"></td>
	</tr>
</table>


<h1>Related css</h1>

<script>
    function updategmu() {
      document.getElementById('ion-color-primary').innerHTML = getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary')
    }
</script>

<pre class="language-css">
  <code style="display: block; white-space: pre-wrap;" class="language-css">
    :root {  
      --ion-color-primary: <span id="ion-color-primary"></span><script>document.getElementById('ion-color-primary').innerHTML = getComputedStyle(document.documentElement).getPropertyValue('--ion-color-primary')</script>;
      --ion-color-primary-rgb: 107, 70, 193;
      --ion-color-primary-contrast: #ffffff;
      --ion-color-primary-contrast-rgb: 255, 255, 255;
      --ion-color-primary-shade: #5e3eaa;
      --ion-color-primary-tint: #7a59c7;
    
      --ion-color-secondary: #00f0b8;
      --ion-color-secondary-rgb: 0, 240, 184;
      --ion-color-secondary-contrast: #000000;
      --ion-color-secondary-contrast-rgb: 0, 0, 0;
      --ion-color-secondary-shade: #00d3a2;
      --ion-color-secondary-tint: #1af2bf;
    
      --ion-color-tertiary: #5260ff;
      --ion-color-tertiary-rgb: 82,96,255;
      --ion-color-tertiary-contrast: #ffffff;
      --ion-color-tertiary-contrast-rgb: 255,255,255;
      --ion-color-tertiary-shade: #4854e0;
      --ion-color-tertiary-tint: #6370ff;
    
      --ion-color-success: #2dd36f;
      --ion-color-success-rgb: 45,211,111;
      --ion-color-success-contrast: #000000;
      --ion-color-success-contrast-rgb: 0,0,0;
      --ion-color-success-shade: #28ba62;
      --ion-color-success-tint: #42d77d;
    
      --ion-color-warning: #ffc409;
      --ion-color-warning-rgb: 255,196,9;
      --ion-color-warning-contrast: #000000;
      --ion-color-warning-contrast-rgb: 0,0,0;
      --ion-color-warning-shade: #e0ac08;
      --ion-color-warning-tint: #ffca22;
    
      --ion-color-danger: #eb445a;
      --ion-color-danger-rgb: 235,68,90;
      --ion-color-danger-contrast: #ffffff;
      --ion-color-danger-contrast-rgb: 255,255,255;
      --ion-color-danger-shade: #cf3c4f;
      --ion-color-danger-tint: #ed576b;
      
      --ion-color-dark: #222428;
      --ion-color-dark-rgb: 34,36,40;
      --ion-color-dark-contrast: #fff;
      --ion-color-dark-contrast-rgb: 255,255,255;
      --ion-color-dark-shade: #1e2023;
      --ion-color-dark-tint: #383a3e;
    
      --ion-color-medium: #92949c;
      --ion-color-medium-rgb: 146,148,156;
      --ion-color-medium-contrast: #000000;
      --ion-color-medium-contrast-rgb: 0,0,0;
      --ion-color-medium-shade: #808289;
      --ion-color-medium-tint: #9d9fa6;
    
      --ion-color-light: #f4f5f8;
      --ion-color-light-rgb: 244,245,248;
      --ion-color-light-contrast: #000000;
      --ion-color-light-contrast-rgb: 0,0,0;
      --ion-color-light-shade: #d7d8da;
      --ion-color-light-tint: #f5f6f9;
    }  
  </code>
</pre>
`