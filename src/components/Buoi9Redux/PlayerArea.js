import React, { Component } from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { playerSelect } from './redux/actions/gameAction';

class PlayerArea extends Component {
    render() {
        console.log(this.props.arrayItem);
        return this.props.arrayItem.map(item => (
            <TouchableOpacity key={item.id}
                onPress={() => this.props.onSelectItem(item)}
                style={[styles.selectButton, item.status && styles.selectedItem]}>
                <Image style={styles.buttonImage} source={item.image}></Image>
            </TouchableOpacity>
        ))
    }
}
const styles = StyleSheet.create({
    buttonImage: {
        width: 60,
        height: 60,
    },
    selectButton: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectedItem: {
        borderColor: 'yellow',
        borderWidth: 3,
        borderRadius: 8,
    }
});

const mapStateToProps = (state) => ({
    arrayItem: state.gameReducer.arrayItem,
});
const mapDispatchToProps = dispatch => {
    return {
        onSelectItem: (item) => dispatch(playerSelect(item)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlayerArea);