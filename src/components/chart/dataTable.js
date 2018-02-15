import React, { Component } from 'react';

  export default class DataTable extends Component {       

    constructor(props) {
        super(props);  
        this.state = {  
    
    };
}

render () {
    return (
      <div className="">
                CHANGE24HOUR: {this.props.data.CHANGE24HOUR}<br/>
          CHANGE24HOURPCT: {this.props.data.CHANGE24HOURPCT}<br/>
          FLAGS: {this.props.data.FLAGS}<br/>
          FROMSYMBOL: {this.props.data.FROMSYMBOL}<br/>
          HIGH24HOUR: {this.props.data.HIGH24HOUR}<br/>
          HIGHHOUR: {this.props.data.HIGHHOUR}<br/>
          LASTMARKET: {this.props.data.LASTMARKET}<br/>
          LASTTRADEID: {this.props.data.LASTTRADEID}<br/>
          LASTUPDATE: {this.props.data.LASTUPDATE}<br/>
          LASTVOLUME: {this.props.data.LASTVOLUME}<br/>
          LASTVOLUMETO: {this.props.data.LASTVOLUMETO}<br/>
          LOW24HOUR: {this.props.data.LOW24HOUR}<br/>
          LOWHOUR: {this.props.data.LOWHOUR}<br/>
          MARKET: {this.props.data.MARKET}<br/>
          OPEN24HOUR: {this.props.data.OPEN24HOUR}<br/>
          OPENHOUR: {this.props.data.OPENHOUR}<br/>
          PRICE: {this.props.data.PRICE}<br/>
          TOSYMBOL: {this.props.data.TOSYMBOL}<br/>
          TYPE: {this.props.data.TYPE}<br/>
          VOLUME24HOUR: {this.props.data.VOLUME24HOUR}<br/>
          VOLUME24HOURTO: {this.props.data.VOLUME24HOURTO}<br/>
          VOLUMEHOUR: {this.props.data.VOLUMEHOUR}<br/>
          VOLUMEHOURTO: {this.props.data.VOLUMEHOURTO}<br/>
            
        </div>
    )
 }
}



    
