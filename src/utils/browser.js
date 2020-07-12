export function getParams(){

    const o= window.location.search.slice(1).split('&')
      .map(p => p.split('='))
      .reduce((r,p) => {
          const name = p[0];
          if(!name) return r;
          let value = p.length > 1 ? p[p.length-1] : true;
          if(typeof value === 'string' && value.includes(',')) value = value.split(',');
          (r[name] === undefined) ? r[name]=[value] : r[name].push(value);
          return r;
      },{});
  
    return Object.entries(o).reduce((r,p)=>(r[p[0]]=p[1].length>1 ? p[1] : p[1][0],r),{});
}

export function setParams(params){
    let str = Object.entries(params).map(([key,value])=>`${key}=${value}`).join('&');
    window.history.pushState({}, "", str ? `?${str}` : '');
}