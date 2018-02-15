import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Line } from 'react-chartjs-2';
import DataTable from './dataTable';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

// import { getFetchCompany } from '../../actions/index'

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


  class LineChart extends Component {       

    constructor(props) {
        super(props);    
        this.state = {        
        };       
      }


render () {
  
    return (

      <Line data={this.props.data} options={this.props.options}/>

    )
 }
}


export default  withStyles(styles, { withTheme: true })
  (LineChart)
    
