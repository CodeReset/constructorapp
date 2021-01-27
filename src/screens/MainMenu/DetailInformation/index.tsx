import React, {useState} from 'react';
import {Text, View, ScrollView, Image, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ClockIcon from '../../../assets/svg/ClockIcon';
import FireCal from '../../../assets/svg/FireCal';
import StarIcon from '../../../assets/svg/StarIcon';
import SvgTestAdditional from '../../../assets/svg/SvgTestAdditional';
import WeightIcon from '../../../assets/svg/WeightIcon';
import DetailScreenCount from '../../../components/UI/DetailScreenCount/DetailScreenCount';
import Heading from '../../../components/UI/Heading/Heading';

import {styles} from './style';

export const DetailInformation = ({route}: any) => {
  const {info} = route.params;

  const addToCard = () => {
    console.log('Add to card');
  };

  // Refactor
  const [size, setSize] = useState({});

  // Refactor
  const [additional, setAdditional] = useState({});

  return (
    <ScrollView style={styles.containerWrapper}>
      <View style={styles.containerWrapper}>
        <ScrollView style={styles.scrollContainer}>
          <ImageBackground
            style={styles.imageBackground}
            imageStyle={styles.imageStyleBg}
            source={{uri: info.img}}></ImageBackground>
          <View style={styles.viewPaddingContent}>
            <Heading marginTop={40}>{info.name}</Heading>
            <Text style={styles.descriptionInfo}>
              Sake is produced by a leavining process and converting strach into
              sugar, It may sound simole, but the entire process can take a few
              month.
            </Text>

            <View style={styles.qualityTopAlign}>
              <Text style={styles.qualityTopAlignText}>Quality</Text>
              <DetailScreenCount />
            </View>

            <View style={styles.descriptionIcons}>
              <View style={styles.descriptionIconTeam}>
                <FireCal />
                <Text style={styles.textDescriptionLine}>130 cal</Text>
              </View>

              <View style={styles.descriptionIconTeam}>
                <ClockIcon />
                <Text style={styles.textDescriptionLine}>15-20 min</Text>
              </View>

              <View style={styles.descriptionIconTeam}>
                <StarIcon />
                <Text style={styles.textDescriptionLine}>4.9 vote</Text>
              </View>

              <View style={styles.descriptionIconTeam}>
                <WeightIcon />
                <Text style={styles.textDescriptionLine}>350g</Text>
              </View>
            </View>

            <View style={styles.qualityTopAlign}>
              <Text style={styles.qualityTopAlignText}>Size</Text>

              <View style={styles.wrapperSizeGramm}>
                {/* Refactor */}
                {info?.size?.length &&
                  info.size.map((item: any) => (
                    <TouchableOpacity
                      key={item.id}
                      onPress={() => setSize(item)}
                      style={[
                        styles.itemSizeGramm,
                        size === item && styles.activeItemSizeGramm,
                      ]}>
                      <Text
                        style={[
                          styles.textSizeGramm,
                          size === item && styles.activeTextSizeGramm,
                        ]}>
                        {item.size} {item.val}
                      </Text>
                    </TouchableOpacity>
                  ))}
                {/* Refactor */}
              </View>
            </View>

            <View style={styles.additionStyle}>
              {/* Refactor */}
              {info?.additional?.length &&
                info?.additional.map((item: any) => (
                  <TouchableOpacity
                    onPress={() => setAdditional(item)}
                    style={[
                      styles.additionStyleItem,
                      additional === item && styles.activeAdditionStyleItem,
                    ]}
                    key={item.id}>
                    <SvgTestAdditional colorProps={additional === item} />
                    <Text
                      style={[
                        styles.additionStyleItemText,
                        additional === item &&
                          styles.activeAdditionStyleItemText,
                      ]}>
                      {item.name}
                    </Text>
                    <Text
                      style={[
                        styles.additionStyleItemPrice,
                        additional === item &&
                          styles.activeAdditionStyleItemPrice,
                      ]}>
                      ${item.price}
                    </Text>
                  </TouchableOpacity>
                ))}
              {/* Refactor */}
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.costTotalWrapper}>
        <Text style={styles.costTotalWrapperText}>${info.price}</Text>
        <TouchableOpacity style={styles.buttonAdderToCard} onPress={addToCard}>
          <Text style={styles.buttonAdderToCardText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
