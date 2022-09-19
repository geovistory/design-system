/**
 * This function was created to extend Prism to support other languages
 * than the core languages.
 *
 * To generate this function with other / more languages
 * 1. go to
 * https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+bash+git+http+ignore+json+json5+plsql+python+jsx+tsx+sass+scss+sparql+sql+turtle+typescript+xquery
 * 2. download the js (button on bottom of page)
 * 3. copy the code for the languages you need
 * 4. paste them in the extendPrism function below
 *
 * @param {*} Prism
 */

export function extendPrism(Prism){
  !(function (e) {
    var t =
        '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
      a = { pattern: /(^(["']?)\w+\2)[ \t]+\S.*/, lookbehind: !0, alias: 'punctuation', inside: null },
      n = {
        bash: a,
        environment: { pattern: RegExp('\\$' + t), alias: 'constant' },
        variable: [
          {
            pattern: /\$?\(\([\s\S]+?\)\)/,
            greedy: !0,
            inside: {
              variable: [{ pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 }, /^\$\(\(/],
              number: /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
              operator: /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
              punctuation: /\(\(?|\)\)?|,|;/,
            },
          },
          { pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/, greedy: !0, inside: { variable: /^\$\(|^`|\)$|`$/ } },
          {
            pattern: /\$\{[^}]+\}/,
            greedy: !0,
            inside: { operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/, punctuation: /[\[\]]/, environment: { pattern: RegExp('(\\{)' + t), lookbehind: !0, alias: 'constant' } },
          },
          /\$(?:\w+|[#?*!@$])/,
        ],
        entity: /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
      };
    (e.languages.bash = {
      'shebang': { pattern: /^#!\s*\/.*/, alias: 'important' },
      'comment': { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
      'function-name': [
        { pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/, lookbehind: !0, alias: 'function' },
        { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: 'function' },
      ],
      'for-or-select': { pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/, alias: 'variable', lookbehind: !0 },
      'assign-left': {
        pattern: /(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,
        inside: { environment: { pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + t), lookbehind: !0, alias: 'constant' } },
        alias: 'variable',
        lookbehind: !0,
      },
      'parameter': { pattern: /(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/, alias: 'variable', lookbehind: !0 },
      'string': [
        { pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/, lookbehind: !0, greedy: !0, inside: n },
        { pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/, lookbehind: !0, greedy: !0, inside: { bash: a } },
        { pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/, lookbehind: !0, greedy: !0, inside: n },
        { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
        { pattern: /\$'(?:[^'\\]|\\[\s\S])*'/, greedy: !0, inside: { entity: n.entity } },
      ],
      'environment': { pattern: RegExp('\\$?' + t), alias: 'constant' },
      'variable': n.variable,
      'function': {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
        lookbehind: !0,
      },
      'keyword': { pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/, lookbehind: !0 },
      'builtin': {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
        lookbehind: !0,
        alias: 'class-name',
      },
      'boolean': { pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/, lookbehind: !0 },
      'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
      'operator': { pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/, inside: { 'file-descriptor': { pattern: /^\d/, alias: 'important' } } },
      'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
      'number': { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 },
    }),
      (a.inside = e.languages.bash);
    for (
      var s = [
          'comment',
          'function-name',
          'for-or-select',
          'assign-left',
          'parameter',
          'string',
          'environment',
          'function',
          'keyword',
          'builtin',
          'boolean',
          'file-descriptor',
          'operator',
          'punctuation',
          'number',
        ],
        o = n.variable[1].inside,
        i = 0;
      i < s.length;
      i++
    )
      o[s[i]] = e.languages.bash[s[i]];
    (e.languages.sh = e.languages.bash), (e.languages.shell = e.languages.bash);
  })(Prism);

  Prism.languages.git = {
    'comment': /^#.*/m,
    'deleted': /^[-–].*/m,
    'inserted': /^\+.*/m,
    'string': /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
    'command': { pattern: /^.*\$ git .*$/m, inside: { parameter: /\s--?\w+/ } },
    'coord': /^@@.*@@$/m,
    'commit-sha1': /^commit \w{40}$/m,
  };
  !(function (t) {
    function a(t) {
      return RegExp('(^(?:' + t + '):[ \t]*(?![ \t]))[^]+', 'i');
    }
    t.languages.http = {
      'request-line': {
        pattern: /^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,
        inside: {
          'method': { pattern: /^[A-Z]+\b/, alias: 'property' },
          'request-target': { pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/, lookbehind: !0, alias: 'url', inside: t.languages.uri },
          'http-version': { pattern: /^(\s)HTTP\/[\d.]+/, lookbehind: !0, alias: 'property' },
        },
      },
      'response-status': {
        pattern: /^HTTP\/[\d.]+ \d+ .+/m,
        inside: {
          'http-version': { pattern: /^HTTP\/[\d.]+/, alias: 'property' },
          'status-code': { pattern: /^(\s)\d+(?=\s)/, lookbehind: !0, alias: 'number' },
          'reason-phrase': { pattern: /^(\s).+/, lookbehind: !0, alias: 'string' },
        },
      },
      'header': {
        pattern: /^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,
        inside: {
          'header-value': [
            { pattern: a('Content-Security-Policy'), lookbehind: !0, alias: ['csp', 'languages-csp'], inside: t.languages.csp },
            { pattern: a('Public-Key-Pins(?:-Report-Only)?'), lookbehind: !0, alias: ['hpkp', 'languages-hpkp'], inside: t.languages.hpkp },
            { pattern: a('Strict-Transport-Security'), lookbehind: !0, alias: ['hsts', 'languages-hsts'], inside: t.languages.hsts },
            { pattern: a('[^:]+'), lookbehind: !0 },
          ],
          'header-name': { pattern: /^[^:]+/, alias: 'keyword' },
          'punctuation': /^:/,
        },
      },
    };
    var e,
      n = t.languages,
      s = {
        'application/javascript': n.javascript,
        'application/json': n.json || n.javascript,
        'application/xml': n.xml,
        'text/xml': n.xml,
        'text/html': n.html,
        'text/css': n.css,
        'text/plain': n.plain,
      },
      i = { 'application/json': !0, 'application/xml': !0 };
    function r(t) {
      var a = t.replace(/^[a-z]+\//, '');
      return '(?:' + t + '|\\w+/(?:[\\w.-]+\\+)+' + a + '(?![+\\w.-]))';
    }
    for (var p in s)
      if (s[p]) {
        e = e || {};
        var l = i[p] ? r(p) : p;
        e[p.replace(/\//g, '-')] = {
          pattern: RegExp('(content-type:\\s*' + l + '(?:(?:\r\n?|\n)[\\w-].*)*(?:\r(?:\n|(?!\n))|\n))[^ \t\\w-][^]*', 'i'),
          lookbehind: !0,
          inside: s[p],
        };
      }
    e && t.languages.insertBefore('http', 'header', e);
  })(Prism);
  !(function (n) {
    (n.languages.ignore = {
      comment: /^#.*/m,
      entry: {
        pattern: /\S(?:.*(?:(?:\\ )|\S))?/,
        alias: 'string',
        inside: { operator: /^!|\*\*?|\?/, regex: { pattern: /(^|[^\\])\[[^\[\]]*\]/, lookbehind: !0 }, punctuation: /\// },
      },
    }),
      (n.languages.gitignore = n.languages.ignore),
      (n.languages.hgignore = n.languages.ignore),
      (n.languages.npmignore = n.languages.ignore);
  })(Prism);
  (Prism.languages.json = {
    property: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, lookbehind: !0, greedy: !0 },
    string: { pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, lookbehind: !0, greedy: !0 },
    comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: { pattern: /\bnull\b/, alias: 'keyword' },
  }),
    (Prism.languages.webmanifest = Prism.languages.json);
  !(function (n) {
    var e = /("|')(?:\\(?:\r\n?|\n|.)|(?!\1)[^\\\r\n])*\1/;
    n.languages.json5 = n.languages.extend('json', {
      property: [
        { pattern: RegExp(e.source + '(?=\\s*:)'), greedy: !0 },
        { pattern: /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/, alias: 'unquoted' },
      ],
      string: { pattern: e, greedy: !0 },
      number: /[+-]?\b(?:NaN|Infinity|0x[a-fA-F\d]+)\b|[+-]?(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[eE][+-]?\d+\b)?/,
    });
  })(Prism);
  Prism.languages.sql = {
    comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/, lookbehind: !0 },
    variable: [{ pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 }, /@[\w.$]+/],
    string: { pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/, greedy: !0, lookbehind: !0 },
    identifier: { pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/, greedy: !0, lookbehind: !0, inside: { punctuation: /^`|`$/ } },
    function: /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
    keyword:
      /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
    boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
    number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
    operator: /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
    punctuation: /[;[\]()`,.]/,
  };
  (Prism.languages.plsql = Prism.languages.extend('sql', {
    comment: { pattern: /\/\*[\s\S]*?\*\/|--.*/, greedy: !0 },
    keyword:
      /\b(?:A|ACCESSIBLE|ADD|AGENT|AGGREGATE|ALL|ALTER|AND|ANY|ARRAY|AS|ASC|AT|ATTRIBUTE|AUTHID|AVG|BEGIN|BETWEEN|BFILE_BASE|BINARY|BLOB_BASE|BLOCK|BODY|BOTH|BOUND|BULK|BY|BYTE|C|CALL|CALLING|CASCADE|CASE|CHAR|CHARACTER|CHARSET|CHARSETFORM|CHARSETID|CHAR_BASE|CHECK|CLOB_BASE|CLONE|CLOSE|CLUSTER|CLUSTERS|COLAUTH|COLLECT|COLUMNS|COMMENT|COMMIT|COMMITTED|COMPILED|COMPRESS|CONNECT|CONSTANT|CONSTRUCTOR|CONTEXT|CONTINUE|CONVERT|COUNT|CRASH|CREATE|CREDENTIAL|CURRENT|CURSOR|CUSTOMDATUM|DANGLING|DATA|DATE|DATE_BASE|DAY|DECLARE|DEFAULT|DEFINE|DELETE|DESC|DETERMINISTIC|DIRECTORY|DISTINCT|DOUBLE|DROP|DURATION|ELEMENT|ELSE|ELSIF|EMPTY|END|ESCAPE|EXCEPT|EXCEPTION|EXCEPTIONS|EXCLUSIVE|EXECUTE|EXISTS|EXIT|EXTERNAL|FETCH|FINAL|FIRST|FIXED|FLOAT|FOR|FORALL|FORCE|FROM|FUNCTION|GENERAL|GOTO|GRANT|GROUP|HASH|HAVING|HEAP|HIDDEN|HOUR|IDENTIFIED|IF|IMMEDIATE|IMMUTABLE|IN|INCLUDING|INDEX|INDEXES|INDICATOR|INDICES|INFINITE|INSERT|INSTANTIABLE|INT|INTERFACE|INTERSECT|INTERVAL|INTO|INVALIDATE|IS|ISOLATION|JAVA|LANGUAGE|LARGE|LEADING|LENGTH|LEVEL|LIBRARY|LIKE|LIKE2|LIKE4|LIKEC|LIMIT|LIMITED|LOCAL|LOCK|LONG|LOOP|MAP|MAX|MAXLEN|MEMBER|MERGE|MIN|MINUS|MINUTE|MOD|MODE|MODIFY|MONTH|MULTISET|MUTABLE|NAME|NAN|NATIONAL|NATIVE|NCHAR|NEW|NOCOMPRESS|NOCOPY|NOT|NOWAIT|NULL|NUMBER_BASE|OBJECT|OCICOLL|OCIDATE|OCIDATETIME|OCIDURATION|OCIINTERVAL|OCILOBLOCATOR|OCINUMBER|OCIRAW|OCIREF|OCIREFCURSOR|OCIROWID|OCISTRING|OCITYPE|OF|OLD|ON|ONLY|OPAQUE|OPEN|OPERATOR|OPTION|OR|ORACLE|ORADATA|ORDER|ORGANIZATION|ORLANY|ORLVARY|OTHERS|OUT|OVERLAPS|OVERRIDING|PACKAGE|PARALLEL_ENABLE|PARAMETER|PARAMETERS|PARENT|PARTITION|PASCAL|PERSISTABLE|PIPE|PIPELINED|PLUGGABLE|POLYMORPHIC|PRAGMA|PRECISION|PRIOR|PRIVATE|PROCEDURE|PUBLIC|RAISE|RANGE|RAW|READ|RECORD|REF|REFERENCE|RELIES_ON|REM|REMAINDER|RENAME|RESOURCE|RESULT|RESULT_CACHE|RETURN|RETURNING|REVERSE|REVOKE|ROLLBACK|ROW|SAMPLE|SAVE|SAVEPOINT|SB1|SB2|SB4|SECOND|SEGMENT|SELECT|SELF|SEPARATE|SEQUENCE|SERIALIZABLE|SET|SHARE|SHORT|SIZE|SIZE_T|SOME|SPARSE|SQL|SQLCODE|SQLDATA|SQLNAME|SQLSTATE|STANDARD|START|STATIC|STDDEV|STORED|STRING|STRUCT|STYLE|SUBMULTISET|SUBPARTITION|SUBSTITUTABLE|SUBTYPE|SUM|SYNONYM|TABAUTH|TABLE|TDO|THE|THEN|TIME|TIMESTAMP|TIMEZONE_ABBR|TIMEZONE_HOUR|TIMEZONE_MINUTE|TIMEZONE_REGION|TO|TRAILING|TRANSACTION|TRANSACTIONAL|TRUSTED|TYPE|UB1|UB2|UB4|UNDER|UNION|UNIQUE|UNPLUG|UNSIGNED|UNTRUSTED|UPDATE|USE|USING|VALIST|VALUE|VALUES|VARIABLE|VARIANCE|VARRAY|VARYING|VIEW|VIEWS|VOID|WHEN|WHERE|WHILE|WITH|WORK|WRAPPED|WRITE|YEAR|ZONE)\b/i,
    operator: /:=?|=>|[<>^~!]=|\.\.|\|\||\*\*|[-+*/%<>=@]/,
  })),
    Prism.languages.insertBefore('plsql', 'operator', { label: { pattern: /<<\s*\w+\s*>>/, alias: 'symbol' } });
  (Prism.languages.python = {
    'comment': { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
    'string-interpolation': {
      pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
      greedy: !0,
      inside: {
        interpolation: {
          pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
          lookbehind: !0,
          inside: { 'format-spec': { pattern: /(:)[^:(){}]+(?=\}$)/, lookbehind: !0 }, 'conversion-option': { pattern: /![sra](?=[:}]$)/, alias: 'punctuation' }, 'rest': null },
        },
        string: /[\s\S]+/,
      },
    },
    'triple-quoted-string': { pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i, greedy: !0, alias: 'string' },
    'string': { pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i, greedy: !0 },
    'function': { pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g, lookbehind: !0 },
    'class-name': { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
    'decorator': { pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m, lookbehind: !0, alias: ['annotation', 'punctuation'], inside: { punctuation: /\./ } },
    'keyword':
      /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
    'builtin':
      /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
    'boolean': /\b(?:False|None|True)\b/,
    'number': /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
    'operator': /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
    'punctuation': /[{}[\];(),.:]/,
  }),
    (Prism.languages.python['string-interpolation'].inside.interpolation.inside.rest = Prism.languages.python),
    (Prism.languages.py = Prism.languages.python);
  !(function (t) {
    var n = t.util.clone(t.languages.javascript),
      e = '(?:\\{<S>*\\.{3}(?:[^{}]|<BRACES>)*\\})';
    function a(t, n) {
      return (
        (t = t
          .replace(/<S>/g, function () {
            return '(?:\\s|//.*(?!.)|/\\*(?:[^*]|\\*(?!/))\\*/)';
          })
          .replace(/<BRACES>/g, function () {
            return '(?:\\{(?:\\{(?:\\{[^{}]*\\}|[^{}])*\\}|[^{}])*\\})';
          })
          .replace(/<SPREAD>/g, function () {
            return e;
          })),
        RegExp(t, n)
      );
    }
    (e = a(e).source),
      (t.languages.jsx = t.languages.extend('markup', n)),
      (t.languages.jsx.tag.pattern = a(
        '</?(?:[\\w.:-]+(?:<S>+(?:[\\w.:$-]+(?:=(?:"(?:\\\\[^]|[^\\\\"])*"|\'(?:\\\\[^]|[^\\\\\'])*\'|[^\\s{\'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*/?)?>',
      )),
      (t.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
      (t.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
      (t.languages.jsx.tag.inside.tag.inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
      (t.languages.jsx.tag.inside.comment = n.comment),
      t.languages.insertBefore('inside', 'attr-name', { spread: { pattern: a('<SPREAD>'), inside: t.languages.jsx } }, t.languages.jsx.tag),
      t.languages.insertBefore(
        'inside',
        'special-attr',
        {
          script: { pattern: a('=<BRACES>'), alias: 'language-javascript', inside: { 'script-punctuation': { pattern: /^=(?=\{)/, alias: 'punctuation' }, 'rest': t.languages.jsx } },
        },
        t.languages.jsx.tag,
      );
    var s = function (t) {
        return t ? ('string' == typeof t ? t : 'string' == typeof t.content ? t.content : t.content.map(s).join('')) : '';
      },
      g = function (n) {
        for (var e = [], a = 0; a < n.length; a++) {
          var o = n[a],
            i = !1;
          if (
            ('string' != typeof o &&
              ('tag' === o.type && o.content[0] && 'tag' === o.content[0].type
                ? '</' === o.content[0].content[0].content
                  ? e.length > 0 && e[e.length - 1].tagName === s(o.content[0].content[1]) && e.pop()
                  : '/>' === o.content[o.content.length - 1].content || e.push({ tagName: s(o.content[0].content[1]), openedBraces: 0 })
                : e.length > 0 && 'punctuation' === o.type && '{' === o.content
                ? e[e.length - 1].openedBraces++
                : e.length > 0 && e[e.length - 1].openedBraces > 0 && 'punctuation' === o.type && '}' === o.content
                ? e[e.length - 1].openedBraces--
                : (i = !0)),
            (i || 'string' == typeof o) && e.length > 0 && 0 === e[e.length - 1].openedBraces)
          ) {
            var r = s(o);
            a < n.length - 1 && ('string' == typeof n[a + 1] || 'plain-text' === n[a + 1].type) && ((r += s(n[a + 1])), n.splice(a + 1, 1)),
              a > 0 && ('string' == typeof n[a - 1] || 'plain-text' === n[a - 1].type) && ((r = s(n[a - 1]) + r), n.splice(a - 1, 1), a--),
              (n[a] = new t.Token('plain-text', r, null, r));
          }
          o.content && 'string' != typeof o.content && g(o.content);
        }
      };
    t.hooks.add('after-tokenize', function (t) {
      ('jsx' !== t.language && 'tsx' !== t.language) || g(t.tokens);
    });
  })(Prism);
  !(function (e) {
    (e.languages.typescript = e.languages.extend('javascript', {
      'class-name': {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: !0,
        greedy: !0,
        inside: null,
      },
      'builtin': /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
    })),
      e.languages.typescript.keyword.push(
        /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
        /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
        /\btype\b(?=\s*(?:[\{*]|$))/,
      ),
      delete e.languages.typescript.parameter,
      delete e.languages.typescript['literal-property'];
    var s = e.languages.extend('typescript', {});
    delete s['class-name'],
      (e.languages.typescript['class-name'].inside = s),
      e.languages.insertBefore('typescript', 'function', {
        'decorator': { pattern: /@[$\w\xA0-\uFFFF]+/, inside: { at: { pattern: /^@/, alias: 'operator' }, function: /^[\s\S]+/ } },
        'generic-function': {
          pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: !0,
          inside: { function: /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/, generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: s } },
        },
      }),
      (e.languages.ts = e.languages.typescript);
  })(Prism);
  !(function (e) {
    var a = e.util.clone(e.languages.typescript);
    (e.languages.tsx = e.languages.extend('jsx', a)), delete e.languages.tsx.parameter, delete e.languages.tsx['literal-property'];
    var t = e.languages.tsx.tag;
    (t.pattern = RegExp('(^|[^\\w$]|(?=</))(?:' + t.pattern.source + ')', t.pattern.flags)), (t.lookbehind = !0);
  })(Prism);
  !(function (e) {
    (e.languages.sass = e.languages.extend('css', { comment: { pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m, lookbehind: !0, greedy: !0 } })),
      e.languages.insertBefore('sass', 'atrule', { 'atrule-line': { pattern: /^(?:[ \t]*)[@+=].+/m, greedy: !0, inside: { atrule: /(?:@[\w-]+|[+=])/ } } }),
      delete e.languages.sass.atrule;
    var r = /\$[-\w]+|#\{\$[-\w]+\}/,
      t = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, { pattern: /(\s)-(?=\s)/, lookbehind: !0 }];
    e.languages.insertBefore('sass', 'property', {
      'variable-line': { pattern: /^[ \t]*\$.+/m, greedy: !0, inside: { punctuation: /:/, variable: r, operator: t } },
      'property-line': {
        pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
        greedy: !0,
        inside: { property: [/[^:\s]+(?=\s*:)/, { pattern: /(:)[^:\s]+/, lookbehind: !0 }], punctuation: /:/, variable: r, operator: t, important: e.languages.sass.important },
      },
    }),
      delete e.languages.sass.property,
      delete e.languages.sass.important,
      e.languages.insertBefore('sass', 'punctuation', {
        selector: { pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m, lookbehind: !0, greedy: !0 },
      });
  })(Prism);
  (Prism.languages.scss = Prism.languages.extend('css', {
    comment: { pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/, lookbehind: !0 },
    atrule: { pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/, inside: { rule: /@[\w-]+/ } },
    url: /(?:[-a-z]+-)?url(?=\()/i,
    selector: {
      pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
      inside: { parent: { pattern: /&/, alias: 'important' }, placeholder: /%[-\w]+/, variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
    },
    property: { pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/, inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ } },
  })),
    Prism.languages.insertBefore('scss', 'atrule', {
      keyword: [
        /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
        { pattern: /( )(?:from|through)(?= )/, lookbehind: !0 },
      ],
    }),
    Prism.languages.insertBefore('scss', 'important', { variable: /\$[-\w]+|#\{\$[-\w]+\}/ }),
    Prism.languages.insertBefore('scss', 'function', {
      'module-modifier': { pattern: /\b(?:as|hide|show|with)\b/i, alias: 'keyword' },
      'placeholder': { pattern: /%[-\w]+/, alias: 'selector' },
      'statement': { pattern: /\B!(?:default|optional)\b/i, alias: 'keyword' },
      'boolean': /\b(?:false|true)\b/,
      'null': { pattern: /\bnull\b/, alias: 'keyword' },
      'operator': { pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/, lookbehind: !0 },
    }),
    (Prism.languages.scss.atrule.inside.rest = Prism.languages.scss);
  (Prism.languages.turtle = {
    'comment': { pattern: /#.*/, greedy: !0 },
    'multiline-string': { pattern: /"""(?:(?:""?)?(?:[^"\\]|\\.))*"""|'''(?:(?:''?)?(?:[^'\\]|\\.))*'''/, greedy: !0, alias: 'string', inside: { comment: /#.*/ } },
    'string': { pattern: /"(?:[^\\"\r\n]|\\.)*"|'(?:[^\\'\r\n]|\\.)*'/, greedy: !0 },
    'url': { pattern: /<(?:[^\x00-\x20<>"{}|^`\\]|\\(?:u[\da-fA-F]{4}|U[\da-fA-F]{8}))*>/, greedy: !0, inside: { punctuation: /[<>]/ } },
    'function': {
      pattern: /(?:(?![-.\d\xB7])[-.\w\xB7\xC0-\uFFFD]+)?:(?:(?![-.])(?:[-.:\w\xC0-\uFFFD]|%[\da-f]{2}|\\.)+)?/i,
      inside: { 'local-name': { pattern: /([^:]*:)[\s\S]+/, lookbehind: !0 }, 'prefix': { pattern: /[\s\S]+/, inside: { punctuation: /:/ } } },
    },
    'number': /[+-]?\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i,
    'punctuation': /[{}.,;()[\]]|\^\^/,
    'boolean': /\b(?:false|true)\b/,
    'keyword': [/(?:\ba|@prefix|@base)\b|=/, /\b(?:base|graph|prefix)\b/i],
    'tag': { pattern: /@[a-z]+(?:-[a-z\d]+)*/i, inside: { punctuation: /@/ } },
  }),
    (Prism.languages.trig = Prism.languages.turtle);
  (Prism.languages.sparql = Prism.languages.extend('turtle', { boolean: /\b(?:false|true)\b/i, variable: { pattern: /[?$]\w+/, greedy: !0 } })),
    Prism.languages.insertBefore('sparql', 'punctuation', {
      keyword: [
        /\b(?:A|ADD|ALL|AS|ASC|ASK|BNODE|BY|CLEAR|CONSTRUCT|COPY|CREATE|DATA|DEFAULT|DELETE|DESC|DESCRIBE|DISTINCT|DROP|EXISTS|FILTER|FROM|GROUP|HAVING|INSERT|INTO|LIMIT|LOAD|MINUS|MOVE|NAMED|NOT|NOW|OFFSET|OPTIONAL|ORDER|RAND|REDUCED|SELECT|SEPARATOR|SERVICE|SILENT|STRUUID|UNION|USING|UUID|VALUES|WHERE)\b/i,
        /\b(?:ABS|AVG|BIND|BOUND|CEIL|COALESCE|CONCAT|CONTAINS|COUNT|DATATYPE|DAY|ENCODE_FOR_URI|FLOOR|GROUP_CONCAT|HOURS|IF|IRI|isBLANK|isIRI|isLITERAL|isNUMERIC|isURI|LANG|LANGMATCHES|LCASE|MAX|MD5|MIN|MINUTES|MONTH|REGEX|REPLACE|ROUND|sameTerm|SAMPLE|SECONDS|SHA1|SHA256|SHA384|SHA512|STR|STRAFTER|STRBEFORE|STRDT|STRENDS|STRLANG|STRLEN|STRSTARTS|SUBSTR|SUM|TIMEZONE|TZ|UCASE|URI|YEAR)\b(?=\s*\()/i,
        /\b(?:BASE|GRAPH|PREFIX)\b/i,
      ],
    }),
    (Prism.languages.rq = Prism.languages.sparql);
  !(function (e) {
    (e.languages.xquery = e.languages.extend('markup', {
      'xquery-comment': { pattern: /\(:[\s\S]*?:\)/, greedy: !0, alias: 'comment' },
      'string': { pattern: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/, greedy: !0 },
      'extension': { pattern: /\(#.+?#\)/, alias: 'symbol' },
      'variable': /\$[-\w:]+/,
      'axis': {
        pattern: /(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,
        lookbehind: !0,
        alias: 'operator',
      },
      'keyword-operator': {
        pattern: /(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,
        lookbehind: !0,
        alias: 'operator',
      },
      'keyword': {
        pattern:
          /(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,
        lookbehind: !0,
      },
      'function': /[\w-]+(?::[\w-]+)*(?=\s*\()/,
      'xquery-element': { pattern: /(element\s+)[\w-]+(?::[\w-]+)*/, lookbehind: !0, alias: 'tag' },
      'xquery-attribute': { pattern: /(attribute\s+)[\w-]+(?::[\w-]+)*/, lookbehind: !0, alias: 'attr-name' },
      'builtin': {
        pattern:
          /(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:ENTITIES|ENTITY|ID|IDREFS?|NCName|NMTOKENS?|NOTATION|Name|QName|anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|int|integer|language|long|negativeInteger|nonNegativeInteger|nonPositiveInteger|normalizedString|positiveInteger|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,
        lookbehind: !0,
      },
      'number': /\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,
      'operator': [/[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/, { pattern: /(\s)-(?=\s)/, lookbehind: !0 }],
      'punctuation': /[[\](){},;:/]/,
    })),
      (e.languages.xquery.tag.pattern =
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/),
      (e.languages.xquery.tag.inside['attr-value'].pattern = /=(?:("|')(?:\\[\s\S]|\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}|(?!\1)[^\\])*\1|[^\s'">=]+)/),
      (e.languages.xquery.tag.inside['attr-value'].inside.punctuation = /^="|"$/),
      (e.languages.xquery.tag.inside['attr-value'].inside.expression = {
        pattern: /\{(?!\{)(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}/,
        inside: e.languages.xquery,
        alias: 'language-xquery',
      });
    var t = function (e) {
        return 'string' == typeof e ? e : 'string' == typeof e.content ? e.content : e.content.map(t).join('');
      },
      n = function (a) {
        for (var o = [], i = 0; i < a.length; i++) {
          var r = a[i],
            s = !1;
          if (
            ('string' != typeof r &&
              ('tag' === r.type && r.content[0] && 'tag' === r.content[0].type
                ? '</' === r.content[0].content[0].content
                  ? o.length > 0 && o[o.length - 1].tagName === t(r.content[0].content[1]) && o.pop()
                  : '/>' === r.content[r.content.length - 1].content || o.push({ tagName: t(r.content[0].content[1]), openedBraces: 0 })
                : !(o.length > 0 && 'punctuation' === r.type && '{' === r.content) ||
                  (a[i + 1] && 'punctuation' === a[i + 1].type && '{' === a[i + 1].content) ||
                  (a[i - 1] && 'plain-text' === a[i - 1].type && '{' === a[i - 1].content)
                ? o.length > 0 && o[o.length - 1].openedBraces > 0 && 'punctuation' === r.type && '}' === r.content
                  ? o[o.length - 1].openedBraces--
                  : 'comment' !== r.type && (s = !0)
                : o[o.length - 1].openedBraces++),
            (s || 'string' == typeof r) && o.length > 0 && 0 === o[o.length - 1].openedBraces)
          ) {
            var l = t(r);
            i < a.length - 1 && ('string' == typeof a[i + 1] || 'plain-text' === a[i + 1].type) && ((l += t(a[i + 1])), a.splice(i + 1, 1)),
              i > 0 && ('string' == typeof a[i - 1] || 'plain-text' === a[i - 1].type) && ((l = t(a[i - 1]) + l), a.splice(i - 1, 1), i--),
              /^\s+$/.test(l) ? (a[i] = l) : (a[i] = new e.Token('plain-text', l, null, l));
          }
          r.content && 'string' != typeof r.content && n(r.content);
        }
      };
    e.hooks.add('after-tokenize', function (e) {
      'xquery' === e.language && n(e.tokens);
    });
  })(Prism);

}
