export enum APP_SCREEN {
  UN_AUTHORIZE = 'UN_AUTHORIZE',
  SPLASH = 'SPLASH',
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',

  AUTHORIZE = 'AUTHORIZE',
  HOME1 = 'HOME1',
  SEARCH_SCREEN = 'SEARCH_SCREEN',
  HOME2 = 'HOME2',
  HOME4 = 'HOME4',
  HOME3 = 'HOME3',
  MAIN_TEST = 'MAIN_TEST',
  BOTTOM_TAB = 'BOTTOM_TAB',
  DETAIL_HOME = 'DETAIL_HOME',
  DETAIL_ITEM = 'DETAIL_ITEM',
  DETAIL_SEARCH = 'DETAIL_SEARCH',
  DETAIL_ITEM_SEARCH = 'DETAIL_ITEM_SEARCH',
}

export type UnAuthorizeParamsList = {
  [APP_SCREEN.LOGIN]: undefined;
  [APP_SCREEN.REGISTER]: undefined;
  [APP_SCREEN.SPLASH]: undefined;
};
export type AuthorizeParamsList = {
  [APP_SCREEN.HOME1]: undefined;
  [APP_SCREEN.SEARCH_SCREEN]: undefined;
  [APP_SCREEN.BOTTOM_TAB]: undefined;
  [APP_SCREEN.DETAIL_HOME]: undefined;
  [APP_SCREEN.DETAIL_ITEM]: undefined;
  [APP_SCREEN.MAIN_TEST]: undefined;
  [APP_SCREEN.DETAIL_SEARCH]: undefined;
  [APP_SCREEN.DETAIL_ITEM_SEARCH]: undefined;
};
export type RootStackParamList = {
  [APP_SCREEN.UN_AUTHORIZE]: UnAuthorizeParamsList;

  [APP_SCREEN.AUTHORIZE]: AuthorizeParamsList;
};
