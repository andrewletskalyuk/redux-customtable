import React from "react";
import { connect } from "react-redux";

import MyTable from "./myTable";
import { loadData, changePageSize, addData, updateData } from "./actions";

class CustomTable extends React.Component {
  componentWillMount() {
    this.props.loadData();
  }
  updateData = () => {
    const dataLength = this.props.data.length;
    console.log("CustomTable:", { dataLength });
    this.props.updateData(dataLength - 1, "Updated");
  };
  render() {
    // console.log('CustomTable render:',{props:this.props,state:this.state});
    const columns = [
      {
        Header: "Number",
        accessor: "id",
        Cell: (row) => {
          return <div style={null}>{row.value}</div>;
        },
        // width: 300,
      },
      {
        Header: "Name",
        accessor: "name",
        style: {
          display: "flex",
          alignItems: "center",
        },
      },
      {
        Header: "CRUD",
        accessor: "CRUD",
        style: {
          display: "flex",
          alignItems: "center",
        },
      },
    ];
    return (
      <div className="">
        <div className='container'>
          <button className='btn btn-primary btn-sm m-1' onClick={() => this.props.changePageSize(5)}>5</button>
          <button className='btn btn-primary btn-sm m-1' onClick={() => this.props.changePageSize(10)}>10</button>
          <button className='btn btn-primary btn-sm m-1' onClick={() => this.props.changePageSize(20)}>20</button>
          <button className='btn btn-primary btn-sm m-1' onClick={() => this.props.changePageSize(30)}>30</button>
          <button className='btn btn-primary btn-sm m-1' onClick={() => this.props.changePageSize(50)}>50</button>
          <button className='btn btn-primary btn-sm m-1' onClick={() => this.props.changePageSize(100)}>100</button>
          <div>
            <button className='btn btn-primary btn-sm m-1' onClick={() => this.props.addData()}>Додати запис</button>
            <button className='btn btn-primary btn-sm m-1' onClick={this.updateData}>Оновити останній запис</button>
          </div>
        </div>
        <MyTable
          columns={columns}
          data={this.props.data}
          // pageSize={this.props.pageSize}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.data,
});

const mapDispatchToProps = (dispatch) => ({
  loadData: () => {
    dispatch(loadData());
  },
  changePageSize: (size) => {
    dispatch(changePageSize(size));
  },
  addData: () => {
    dispatch(addData());
  },
  updateData: (row, value) => {
    dispatch(updateData(row, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomTable);
