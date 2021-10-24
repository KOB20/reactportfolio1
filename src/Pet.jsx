import React from 'react';

export default class Pet extends React.Component {
    constructor(props) {
      super(props);
      

      this.state = {
        lvl1: false,
        lvl5: false,
        lvl10: false
      }
    
    }
    render() {
        return (
          <div>
            <h2>Levels</h2>
            <form>
              <p>
                <label>
                Level 1:
                  <input type="checkbox" 
                    onChange={() => { this.setState( {lvl1: !this.state.lvl1} ) } }
                  />
                </label>
              </p>
            
              <p>
                <label>
                Level 5:
                  <input type="checkbox"
                    onChange={() => { this.setState( {lvl5: !this.state.lvl5} ) } }
                  />
                </label>
              </p>
             
              <p>
                <label>
                Level 10:
                  <input type="checkbox"
                    onChange={() => { this.setState( {lvl10: !this.state.lvl10} ) } }
                  />
                </label>
              </p>
            </form>
            <div>
            <h2>Your pet</h2>
            {
              this.state.lvl1 ? <p><img src="small.jpg"  alt ="smol doggo"/> <br/>Level 1 </p> : ""
            }
            {
              this.state.lvl5 ? <p><img src="medium.jpg"  alt ="medium doggo"/><br/> Level 5 </p> : ""
            }
            {
              this.state.lvl10 ? <p><img src="big.jpg"  alt ="big doggo"/><br/> Level 10 </p> : ""
            }
          </div>
        </div>
      );    
    }
  
}