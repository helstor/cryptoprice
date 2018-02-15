import React, { Component } from 'react';
import { connect } from 'react-redux';
import DataTable from './dataTable';
import DataRow from './dataRow';
import { withStyles } from 'material-ui/styles';
import FavorIcon from 'material-ui-icons/Favorite';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import LineChart from './lineChart';
import compose from 'recompose/compose';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
  } from 'material-ui/ExpansionPanel';
  import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
  import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
  });


 
  class Chart extends Component {       

    constructor(props) {

        let initVal = 100;
        super(props);    
        this.state = {   
            ethPrices: [initVal],
            ethPriceLabels: [],
            btcPrices: [initVal],     
            btcPriceLabels: [],
            xrpPrices: [initVal],     

        };       
      }

    componentDidMount = () => {       
    }

      componentWillReceiveProps(nextProps) {
        let initVal = 100;
            
        let newVal = false;
        if (this.props.data.btc.PRICE !== nextProps.data.btc.PRICE) {
            if (this.props.data.btc.PRICE !== undefined) {
                this.setState({btcPrices: [...this.state.btcPrices,nextProps.data.btc.PRICE / this.props.data.btc.PRICE*this.state.btcPrices[this.state.btcPrices.length - 1]]});     
            } else { 
                this.setState({btcPrices: [...this.state.btcPrices,initVal]});
            }
            newVal = true;   
        }
   
        if (this.props.data.xrp.PRICE !== nextProps.data.xrp.PRICE) {
            if (this.props.data.xrp.PRICE === undefined) {
                this.setState({xrpPrices: [...this.state.xrpPrices,initVal]});
            } else {
                this.setState({xrpPrices: [...this.state.xrpPrices,nextProps.data.xrp.PRICE / this.props.data.xrp.PRICE*this.state.xrpPrices[this.state.xrpPrices.length - 1]]});                 
            }
            newVal = true;   
        }

        if (this.props.data.eth.PRICE !== nextProps.data.eth.PRICE) {
            if (this.props.data.eth.PRICE !== undefined) {
                this.setState({ethPrices: [...this.state.ethPrices,nextProps.data.eth.PRICE / this.props.data.eth.PRICE*this.state.ethPrices[ this.state.ethPrices.length - 1]]});     
            } else {                 
                this.setState({ethPrices: [...this.state.ethPrices,initVal]});
            }
            newVal = true;   
        }
        
        if (newVal === true) {
            if (this.props.data.eth.PRICE === nextProps.data.eth.PRICE) {
                    this.setState({ethPrices: [...this.state.ethPrices, this.state.ethPrices[this.state.ethPrices.length-1]]});                
            }
    
            if (this.props.data.btc.PRICE === nextProps.data.btc.PRICE) {
                this.setState({btcPrices: [...this.state.btcPrices, this.state.btcPrices[this.state.btcPrices.length-1]]});                
            }

            if (this.props.data.xrp.PRICE === nextProps.data.xrp.PRICE) {
                this.setState({xrpPrices: [...this.state.xrpPrices, this.state.xrpPrices[this.state.xrpPrices.length-1]]});                
            }
            this.setState({btcPriceLabels: [...this.state.btcPriceLabels, Date.now()]});
        }
      }

render () {
    const { classes, theme } = this.props;

    let options = {
        maintainAspectRatio: false,
        animation: {
            duration: 20,
            easing: 'linear'
        },
        defaultFontColor: "#FFFFFF",
        legend: {
            labels: {
                fontColor: 'white',
                fontSize: 20
            }
        }
        
    }

  let data =  {
   labels: this.state.btcPriceLabels.slice(Math.max(this.state.btcPriceLabels.length - 10, 1)),      
    datasets : [{
        label:              "btc",
        borderColor:        "rgb(66, 89, 244, 0.2)",
        backgroundColor:    'rgba(75,192,192,0.4)',
        borderColor:        'rgba(75,192,192,1)',
        borderCapStyle:     'butt',
        data :this.state.btcPrices.slice(Math.max(this.state.btcPrices.length - 10, 1))
    },
    {
        label:              "eth",
        borderColor:        "rgb(66, 255, 244, 0.2)",
        backgroundColor:    'rgba(75,255,192,0.4)',
        borderColor:        'rgba(75,255,192,1)',
        borderCapStyle:     'butt',
        data :this.state.ethPrices.slice(Math.max(this.state.ethPrices.length - 10, 1))
    },
    {
        label:              "xrp",
        borderColor:        "rgb(255, 89, 244, 0.2)",
        backgroundColor:    'rgba(255,192,192,0.4)',
        borderColor:        'rgba(255,192,192,1)',
        borderCapStyle:     'butt',
        data :this.state.xrpPrices.slice(Math.max(this.state.xrpPrices.length - 10, 1))
    }]
  };

  
    return (
      <div className="">           
      <div className="container contentDiv">
      <h1>Bitcoin, Ethereum & Ripple Price Realtime</h1>
      <p>A small React, Socket.Io, Material Ui & Chartjs demo</p>
      <Table className={classes.table}>
        <TableHead>
          <TableRow >
            <TableCell style={{color: "white"}}>Crypto</TableCell>
            <TableCell numeric style={{color: "white"}}>Change %</TableCell>
            <TableCell numeric style={{color: "white"}}> Change</TableCell> 
            <TableCell></TableCell>
            <TableCell numeric style={{color: "white"}}>Price</TableCell>
            <TableCell numeric style={{color: "white"}}>Volume</TableCell>
            <TableCell numeric style={{color: "white"}}>Volume 24h</TableCell>
            <TableCell style={{color: "white"}}>Last Market</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <DataRow data={this.props.data.btc}/>
            <DataRow data={this.props.data.eth}/>
            <DataRow data={this.props.data.xrp}/>

        </TableBody>
      </Table>
<div style={{marginTop: "25px"}}>
<p>Handcrafted with <FavorIcon/> @Kehikko by Sami</p>
<h3>Trailing Price Index</h3>
    <div style={{height: '200px'}}>
        <LineChart data={data} options={options}/>
    </div>
</div>
<ExpansionPanel  style={{marginTop: "25px"}}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Expand to view detailed trading info</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{color: "black"}}>
        <div className="row">
      <div className="col">
        <DataTable data={this.props.data.btc}/>
        </div>
        <div className="col">
        <DataTable data={this.props.data.eth}/>
        </div>
        <div className="col">
        <DataTable data={this.props.data.xrp}/>
        </div>

    </div>

        </ExpansionPanelDetails>
      </ExpansionPanel>
 
        </div>       
        </div>
    )
 }
}


export default withStyles(styles, { withTheme: true }) (Chart)
    
