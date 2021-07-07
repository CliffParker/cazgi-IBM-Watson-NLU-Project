import React from 'react';
import './bootstrap.min.css';




class EmotionTable extends React.Component {
    render() {

      
      

      return (  
        <div>
          {/*You can remove this line and the line below. */}
          <table className="table table-bordered">
            <tbody>
            {
                // Write code to use the .map method that you worked on in the Hands-on React lab to extract the emotions
                
              
                Object.keys(this.props.emotions.emotion) 
                .map((obj) => {
                  return <tr><td>{obj} </td> <td>{this.props.emotions.emotion[obj]} </td></tr>;

                })


            }
            </tbody>
          </table>
          </div>
          );
        }
    
}
export default EmotionTable;
