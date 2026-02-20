import { ColumnDirective, ColumnsDirective, GridComponent,
  Inject, Page, Sort, Filter, Group
 } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
import './App.css'

function App() {
  return <div style={{padding:'20px'}}>
    <GridComponent  dataSource={data} allowPaging={true} pageSettings={{pageSize:5}}
    allowSorting={true} allowMultiSorting={true} allowFiltering={true} filterSettings={{type:'Menu'}}
    allowGrouping={true}
  >
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right"/>
            <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'/>
            <ColumnDirective field='Freight' headerText='Freight' width='100' format='C2' textAlign="Right" />
            <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format='yMd' textAlign="Right"/>
            <ColumnDirective field='ShipName' headerText='Ship Name' width='100'/>
        </ColumnsDirective>
        <Inject services={[Page, Sort, Filter, Group]}/>
    </GridComponent></div>
}

export default App
