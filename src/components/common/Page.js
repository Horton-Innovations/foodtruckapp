import React from 'react';
import {Platform, StatusBar, View, SafeAreaView, Text} from 'react-native';
// import {Spinner} from 'native-base';
import Header from './Header';

const Page = props => {
  const {title, loading, error, children, ...viewProps} = props;
  const showHeader = !!title;

  //   if (loading) {
  //     return (
  //       <View style={styles.spinnerContainer}>
  //         <Spinner style={styles.spinner} />
  //       </View>
  //     );
  //   } else {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.pageContent}>
        {showHeader ? (
          <Header {...props} containerStyle={styles.headerStyle} />
        ) : null}
        <View style={styles.content} {...viewProps}>
          {typeof children === 'function' ? children() : children}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  //   spinnerContainer: {
  //     display: 'flex',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //     height: '100%',
  //   },
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  pageContent: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: 0,
      },
    }),
  },
  content: {
    flex: 1,
  },
  headerStyle: {
    zIndex: 1000,
  },
};

export default Page;
