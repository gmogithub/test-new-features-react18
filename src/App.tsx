import React, { useState } from 'react';
import { Post } from "./component/Post";
import { Box, Button, Typography } from "@mui/material";

function App() {
  const [display, setDisplay] = useState(true);

  function handleClickDisplayPost1() {
    setDisplay(preDisplay => !preDisplay);
  }

  return (
    <Box>
      <Typography>Suspense</Typography>
      <Box>
        {/*<TestSuspenseExempleChatAi/>*/}
        {display && <React.Suspense fallback={" suspense loading"}>

          <Post/>
        </React.Suspense>}
        <Box>
          <Button variant={"contained"} onClick={handleClickDisplayPost1}>display post 1</Button>
        </Box>
      </Box>

      <>============================================================</>

      <Typography>Exemple transition</Typography>
      {/*<ExampleUseTransition/>*/}
      {/*<Box>*/}
      {/*  <React.Suspense fallback={"suspense loading2"}>*/}
      {/*    <Post2/>*/}
      {/*  </React.Suspense>*/}
      {/*</Box>*/}

      {/*<>============================================================</>*/}

      {/*<Box>*/}
      {/*  <React.Suspense fallback={"suspense loading3"}>*/}
      {/*  <Post3/>*/}
      {/*  </React.Suspense>*/}
      {/*</Box>*/}

      <>============================================================</>
    </Box>
  );
}

export default App;
