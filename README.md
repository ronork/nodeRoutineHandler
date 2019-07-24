

# Features

  - Create 'n' number of Child Node Processes with custom execution commands
  - Stop-Restart created custom processes.
 

### Requirements

This package requires [Node.js](https://nodejs.org/) v8+ to run.

### Installation

```sh
$ npm install node-routine-handler
```



## Usage 

#### Initialise
```sh
// nodeMaster(_state,procInstance,runCmd)
var nodeMaster  = require('node-routine-handler');
```

#### Start
```sh
var procInstance = nodeMaster('start');
```

#### Restart
```sh
var new_procInstance = nodeMaster('restart',procInstance);
```

#### Stop
```sh
nodeMaster('stop',procInstance);
```

- __ __state__: 'start'|'stop'|'restart'
- __procInstance__: An instance of the child node process returned on __state='start' to be passed when stoping or restarting a particular node process
- __runCmd__: the command to be executed in child node process (default:'node server')



### Development

Want to contribute? Great!

https://github.com/ronork/nodeRoutineHandler

License
----

ISC


