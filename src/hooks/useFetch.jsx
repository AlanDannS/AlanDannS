import React from 'react';

export const useFetch = (url) => {
  const [state, setState] = React.useState({data:null, loading: true, error:null});

  React.useEffect(()=>{
    fetch(url)
        .then(resp=>resp.json())
        .then(data=>{
            setState({
                loading:false,
                error:null,
                data
            });
        })
  },[url]);
  
    return state;
}
