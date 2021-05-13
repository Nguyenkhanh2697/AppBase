import React, {memo, useCallback, useEffect, useState} from 'react';
import {Alert, StyleSheet, TouchableOpacity} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import isEqual from 'react-fast-compare';
import {AuthorizeParamsList, APP_SCREEN} from '@navigation/screenTypes';
import {Block, Button, ListView, SearchBar, Text} from '@components';
import {scale} from '@common';
import {goBack, navigate} from '@navigation/navigationService';
import {BaseListLogic} from './index.prop';
import {actions} from './../redux/reducer';
import {useSelector, AppDispatch, dispatch} from '@common';
import {useNavigation} from '@react-navigation/native';

type DetailHomeProps = StackScreenProps<
  AuthorizeParamsList,
  APP_SCREEN.DETAIL_HOME
>;
const styles = StyleSheet.create({
  btnItem: {
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
  },
  txtItem: {
    paddingHorizontal: scale(100),
    paddingVertical: scale(15),
  },
  h20: {
    height: scale(20),
  },
  txtHookForm: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnHookForm: {
    borderWidth: 1,
    width: '50%',
    alignSelf: 'center',
  },
});

export interface Item {
  id: number;
  title: string;
}

export interface SearchForm {
  keyword: string;
}

const const_list: Item[] = [
  {id: 1, title: 'item 1'},
  {id: 2, title: 'item 2'},
  {id: 3, title: 'item 3'},
  {id: 4, title: 'item 4'},
  {id: 5, title: 'item 5'},
  {id: 6, title: 'item 6'},
  {id: 7, title: 'item 7'},
  {id: 8, title: 'item 8'},
  {id: 9, title: 'item 9'},
  {id: 10, title: 'item 10'},
  {id: 11, title: 'item 11'},
  {id: 12, title: 'item 12'},
  {id: 13, title: 'item 13'},
];

const loadData = () => {
  return new Promise<Item[]>(resolve => {
    setTimeout(() => {
      return resolve(const_list);
    }, 1000);
  });
};

export class SampleListLogic extends BaseListLogic<Item> {
  getKey(item: Item, index: number) {
    return item.id;
  }

  loadData_(form: SearchForm): Promise<Item[]> {
    return new Promise<Item[]>(resolve => {
      setTimeout(() => {
        let returnList = const_list?.filter(
          (searchData: any, index: number) => {
            return searchData?.title
              .toLowerCase()
              .includes(form.keyword.toLowerCase());
          },
        );

        return resolve(returnList);
      }, 1000);
    });
  }
}

const DetailHomeComponent = ({}: DetailHomeProps) => {
  const navigation = useNavigation();
  const {listSearch} = useSelector(x => x.getListSearch);
  const [page, setPage] = useState(1);
  const [dataTest, setDataTest] = useState<Item[]>([]);
  const [canLoadMore, setCanLoadMore] = useState(true);
  // const listLogic: SampleListLogic = new SampleListLogic(setDataTest, dataTest);

  const _renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <Button style={styles.btnItem} onPress={() => {}}>
        <Text style={styles.txtItem}>{item.id}</Text>
        <Text style={styles.txtItem}>{item.title}</Text>
      </Button>
    );
  };
  const _keyExtractor = (item: Item, index: string) => index.toString();
  const _renderSpace = () => {
    return <Block style={styles.h20} />;
  };

  const onChangeText = (txt: string) => {
    const newState = listSearch.filter((searchData: any, index: number) => {
      return searchData.title.toLowerCase().includes(txt.toLowerCase());
    });
    setDataTest(newState);
    // let searchForm: SearchForm = {keyword: txt};
    // listLogic.doSearch(searchForm);
  };
  const _onRefresh = () => {
    // dispatch(actions.onLoadMore({page: 1}));
  };
  const onLoadMoreSucceeed = (data: Array<any>) => {
    setDataTest(d => d.concat(data));
  };
  const _onLoadMore = () => {
    let pageSearch = page + 1;
    setPage(pageSearch);
    dispatch(
      actions.onGetListSearchAction(
        `/albums?_limit=10&_page=${pageSearch}`,
        {page: pageSearch},
        onLoadMoreSucceeed,
        onFailure,
      ),
    );
  };
  const onFailure = () => {};
  useEffect(() => {
    // loadData().then(data => setDataTest(data));
    // listLogic.doSearch({keyword: ''} as SearchForm);
    dispatch(
      actions.onGetListSearchAction(
        '/albums?_limit=10&_page=1',
        {page: 1},
        data => {
          setDataTest(data);
        },
        onFailure,
      ),
    );
  }, []);

  useEffect(() => {
    if (page * 10 < dataTest.length) {
      setCanLoadMore(false);
    }
  }, [page, dataTest]);

  useEffect(() => {
    // setDataTest(listSearch);
  }, [listSearch]);
  return (
    <Block block>
      <SearchBar placeHolderTx={'Tìm kiếm'} onChangeText={onChangeText} />
      <TouchableOpacity
        style={styles.btnHookForm}
        onPress={() => navigation.navigate('HOOK_FORM')}>
        <Text style={styles.txtHookForm}>React Hook Form</Text>
      </TouchableOpacity>
      <ListView
        canRefresh
        canLoadMore={canLoadMore}
        onLoadMore={_onLoadMore}
        // stickyHeaderIndices={[0]}
        onRefreshing={_onRefresh}
        contentContainerStyle={{paddingBottom: scale(10)}}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<Block style={styles.h20} />}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        ItemSeparatorComponent={_renderSpace}
        data={dataTest}
      />
    </Block>
  );
};

export const DetailHome = memo(DetailHomeComponent, isEqual);
