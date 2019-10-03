import React from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import Spinner from '../../../presesentationals/Spinner'
import NavigationService from '../../../../navigations/NavigationService'

const ListItem = ({ fetchWithParam, list, fetchLoadMore, isRefreshing, isLoadMore, order }) => {
  const toDetailPage = (id) => NavigationService.navigate('SuratDetailScreen', { id, fetch: fetchWithParam })

  const keyExtractor = (item, index) => item.id.toString()

  const renderItem = (item) => (
    <TouchableOpacity
      onPress={toDetailPage.bind(null, item.id)}
      style={{ padding: 15, marginTop: 10, borderWidth: 1, borderColor: '#333' }}
      key={item.id}>
      <Text>ID -> {item.id}</Text>
      <Text>No Surat -> {item.no_surat}</Text>
      <Text>Perihal -> {item.perihal}</Text>
      <Text>pengirim -> {item.pengirim}</Text>
      <Text>kategori -> {item.kategori}</Text>
      <Text>status -> {item.status}</Text>
      <Text>tanggal -> {item.tanggal}</Text>
    </TouchableOpacity>
  )

  const renderSpinner = () => (
    <View style={{ marginTop: -10 }}>
      <Spinner size="large" />
    </View>
  )

  return (
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      {list.length < 1 && !isRefreshing ?
        <View>
          <Text style={{ marginTop: 5 }}>NO_DATA</Text>
        </View> :
        <FlatList
          refreshing={isRefreshing}
          onRefresh={() => fetchWithParam({ order }, 'refreshing')}
          data={list}
          keyExtractor={keyExtractor}
          renderItem={({ item }) => renderItem(item)}
          ListFooterComponent={isLoadMore && renderSpinner()}
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.001}
          onEndReached={() => fetchLoadMore()} />
      }
    </View>
  )
}

export default ListItem
