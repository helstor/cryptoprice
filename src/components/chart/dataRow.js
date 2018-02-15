import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import DataTable from './dataTable';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import IconUp from 'material-ui-icons/ArrowUpward';
import IconForward from 'material-ui-icons/ArrowForward';
import IconDown from 'material-ui-icons/ArrowDownward';
import Paper from 'material-ui/Paper';
import green from 'material-ui/colors/green';
import red from 'material-ui/colors/red';
import Avatar from 'material-ui/Avatar';

// import { getFetchCompany } from '../../actions/index'
function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}


const greenAvatar = {
  margin: 10,
  color: '#fff',
  backgroundColor: green[500],
}
const redAvatar = {
  margin: 10,
  color: '#fff',
  backgroundColor: red[500],
}

const blackAvatar = {
  margin: 10,
  color: '#fff'
}

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    }
  });

const mapStateToProps = (state) => {
    return {        
    };
  };
  
const mapDispatchToProps = (dispatch) => {
    return {
 }} 

  class DataRow extends Component {       

    constructor(props) {
        super(props);    
        this.state = {        
        };       
      }


render () {
  
    return (

              <TableRow key={this.props.data.FROMSYMBOL} style={{height: "45"}}>

                <TableCell numeric style={{color: "white"}}>{this.props.data.FROMSYMBOL}</TableCell>
                           
                <TableCell style={{color: "white"}}>{this.props.data.CHANGE24HOURPCT}</TableCell>
                
                <TableCell numeric style={{color: "white", fontSize: "20px"}}><b>{this.props.data.PRICE}</b></TableCell>
                <TableCell style={{color: "white"}}>
                {this.props.data.FLAGS === "1" &&
                <div>
                  <Avatar style={greenAvatar}>
                  <IconUp />
                  </Avatar>
                
                 </div> 
                }
                {this.props.data.FLAGS === "2" &&
                <div>
                                    <Avatar style={redAvatar}>
                                    <IconDown/>
                  </Avatar>

                  
                 </div>
                }

                {this.props.data.FLAGS !== "1" && this.props.data.FLAGS !== "2" &&
                <div>
                 <Avatar style={blackAvatar}>
                   <IconForward/>
                   </Avatar> 
                 </div>
                }

                </TableCell>

                <TableCell style={{color: "white"}}>{this.props.data.CHANGE24HOUR}</TableCell>
                <TableCell numeric style={{color: "white"}}>{precisionRound(this.props.data.LASTVOLUME,2)}</TableCell>
                <TableCell numeric style={{color: "white"}}>{precisionRound(this.props.data.VOLUME24HOURTO,2)}</TableCell>
                <TableCell style={{color: "white"}}>{this.props.data.LASTMARKET}</TableCell>
              </TableRow>
    )
 }
}


export default
    withStyles(styles, { withTheme: true })
  (DataRow)
    
