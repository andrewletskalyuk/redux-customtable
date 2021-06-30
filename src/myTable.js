import React from 'react';
import ReactTable from 'react-table';
import { connect } from 'react-redux';

class MyTable extends React.Component {
  render() {
    // console.log('MyTable render:',{props:this.props,state:this.state});
    const headComponentExample =
    {
      getTheadProps : () => {
        return {
          style: { color: 'blue' },
          monkey: 'yellow',
        }
      },
      TheadComponent: (props) => { 
        // console.log('TheadComponent props:',props);
        const { children, monkey, ...rest } = props;
        // return <div>nothing</div>;
        return (
          <div {...rest} >
            <div style={{backgroundColor:monkey}}>The {monkey} Monkey</div>
            {children}
          </div>
        );
      },
    };
    const extraProps =
    {
      // ...headComponentExample,
    }
    return (
      <div>
        <h1>{this.props.pageSize}</h1>
        <ReactTable
        style={{minWidth:'min-content'}}
          data={this.props.data}
          columns={this.props.columns}
          pageSize={this.props.pageSize}
          defaultSorted={[{id:'id',desc:true}]}
          _pageSizeOptions={ [5,10,20,30, 50, 100] }
          showPageSizeOptions={true/*false*/}
          {...extraProps}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pageSize: state.pageSize
});

export default connect(mapStateToProps)(MyTable);