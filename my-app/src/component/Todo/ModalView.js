import React from "react";
import {Text , Modal} from "react-native";

function TodoModal(params){
  const {modalVisible} = params;
    return(
        <Modal>
            <Text>Modal</Text>
        </Modal>
    )
}

export {TodoModal};