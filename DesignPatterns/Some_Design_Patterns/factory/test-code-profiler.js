var codeProfiler = require('./code-profiler.js')("test");
codeProfiler.start();

for(var i=0;i<100000;i++){
  i++;
}

codeProfiler.end();

// $ NODE_ENV=production node test-code-profiler.js
//
// $ NODE_ENV=development node test-code-profiler.js
// Timer test took 0 seconds and 1317095 nanoseconds
