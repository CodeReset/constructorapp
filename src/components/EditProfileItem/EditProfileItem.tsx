import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

import ActiveEdit from '../../assets/svg/ActiveEdit';
import IconProfileEdit from '../../assets/svg/IconProfileEdit';
import {styles} from '../CategoryItem/styles';

interface Props {
  label: string;
  valueDef: string;
  setValueDef: (e: string) => void;
  code: string;
}

const EditProfileItem = ({label, valueDef, setValueDef, code}: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <View style={styles.editProfileItem}>
      <View style={styles.iconaProfile}>
        <IconProfileEdit />
      </View>

      <View style={styles.textBlockProfile}>
        <Text style={styles.labelProfile}>{label}</Text>

        {!isEdit ? (
          <Text style={styles.textProfile}>{valueDef}</Text>
        ) : (
          <TextInput
            style={styles.inputProfiler}
            value={valueDef}
            onChangeText={setValueDef}
          />
        )}
      </View>

      <TouchableOpacity
        onPress={() => setIsEdit((prev: boolean) => !prev)}
        style={styles.rightEditWrapper}>
        <ActiveEdit />
      </TouchableOpacity>
    </View>
  );
};

export default EditProfileItem;
