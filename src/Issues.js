import './Issues.css'

const Issues = ({issues,search}) => {
    
  
  return (
    <div>
      <table>
        <tr>
          <th>Issue Title</th>
          <th>Link</th>
        </tr>
        {issues.filter((val)=>{
            if(search===""){
                return val
            }else if(val.title.toLowerCase().includes(search.toLowerCase())){
                return val
            }else{
                return null
            }
        }).map((issue) => {
          return (
            <tr key={issue.id}>
              <td>{issue.title}</td>
              <td><a href={issue.html_url} target="__blank">Open in Github</a></td>
            </tr>
          );
        })}
      </table>

      {/* <table>
        <tr>
          <th>Issue Title</th>
          <th>Link</th>
        </tr>
        {filterArr.map((issue) => {
          return (
            <tr key={issue.id}>
              <td>{issue.title}</td>
              <td><a href={issue.html_url} target="__blank">Open in Github</a></td>
            </tr>
          );
        })}
      </table> */}
    </div>
  );
};

export default Issues;
