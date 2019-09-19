import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
 
export default class ExampleThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['No', 'Channel Size', 'Item', 'Height', 'Width', 'Qty'],
      widthArr: [40, 80, 180, 80, 80, 60],
      tableData: [
        [1, '18g' , 'French Window', '180', '100', 1],
        [2, '18g' , 'French Window', '180', '100', 1],
        [3, '18g' , 'French Window', '180', '100', 1],
        [4, '18g' , 'French Window', '180', '100', 1]
      ],
    }
  }
 
  render() {
    const state = this.state;
 
    return (
      <View>
        <Text style={{fontSize:20,textAlign:'center',color:'black'}}>ESTIMATE</Text>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.header_text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                {
                    state.tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  header: { height: 50, backgroundColor: '#183E61' },
  header_text: { textAlign: 'center', fontWeight: '100', color: "#fff" },
  text: { textAlign: 'center', fontWeight: '100' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#E7E6E1' }
});