const pro= require('child_process');

function launch(runCmd)
{
let node_i = pro.exec(runCmd, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
  });
  return node_i;
}
function restart(node_i,runCmd)
{
if(node_i)//if node instance defined.
{
    node_i.kill();
    return launch(runCmd);
}
else
{
    throw new Error('Restart Failed');
}
}
function stop(node_i)
{
    node_i.kill(); 
}
function nodeMaster(__state='',procInstance='',runCmd='node server')
{
  if(__state)
  {
      let process_i='';
      switch(__state)
      {
        case 'start':
        {
         process_i = launch(runCmd);
         return process_i;
        }
        case 'restart':
        {
          if(procInstance)
          {
            process_i = restart(procInstance,runCmd);
            return process_i;  
          }
          else
          {
            throw new Error('Process Instance missing')
          }
        }
        case 'stop':
        {
          if(procInstance)
          {
            stop(procInstance);
          }
          else
          {
            throw new Error('Process Instance missing')
          }
        }
      }
  }
  else
  {
    throw new Error('Missing process __state');
  }
}
module.exports = nodeMaster;



