import React from 'react'

function MyChild1() {
    console.log("this is change")
  return (
    <div>MyChild1</div>
  )
}

// export default React.memo(MyChild,(pre,next)=>{

//   if(pre.p.data.length === next.p.data.length)
//   {
//     return true;
//   }
//   else
//   {
//     return false;
//   }

// });

export default React.memo(MyChild1);
