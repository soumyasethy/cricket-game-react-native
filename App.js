import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import {playCricket} from './src/hooks/core_logic';
import {appConstant} from './src/repo/data';
import {ResultComponent} from './src/components/result_component';
import {styles} from './src/styles';
import {CTAButton} from './src/components/cta_button';

const App = () => {
  const [
    isWin,
    isLoose,
    wicket,
    score,
    ball,
    over,
    runs,
    batsman,
    runner,
    bowl,
    reset,
  ] = playCricket(appConstant.playersArray);

  const _renderGame = () => (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View>
          <Text style={styles.textMedium}>
            Score: {score}/{wicket - 2}
          </Text>
          <Text style={styles.textMedium}>
            Over: {over}.{ball}
          </Text>
        </View>
        <View>
          <Text style={styles.textLarge}>{runs === -1 ? 'OUT' : runs}</Text>
          <Text style={styles.textMedium}>Runs</Text>
        </View>
      </View>

      <View style={[styles.borderContainer, styles.margin]}>
        <Text style={styles.textMedium}>
          {batsman.name}({batsman.score})*
        </Text>
        <Text style={styles.textMedium}>
          {runner.name}({runner.score})
        </Text>
      </View>
      <CTAButton primaryText={'Bowl'} onPress={bowl} />
    </View>
  );

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {isWin && (
          <ResultComponent message={appConstant.team1 + ' Won'} reset={reset} />
        )}
        {isLoose && (
          <ResultComponent message={appConstant.team2 + ' Won'} reset={reset} />
        )}
        {!isWin && !isLoose && _renderGame()}
      </SafeAreaView>
    </>
  );
};

export default App;
