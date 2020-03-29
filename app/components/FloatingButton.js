import React from 'react';
import {FAB, Portal, Button, Dialog, Paragraph, Provider} from 'react-native-paper';
import styles from '../styles/FloatingButton.styles';




export class FloatingButton extends React.Component{
    state = {
        visible: false,
    };

    _showDialogBox = () => this.setState({visible:true});
    _hideDialogBox = () => this.setState({visible: false});

    render(){
        return(
            <Provider>
                <FAB style={styles.fab}
                    large
                    icon='plus'
                     onPress={this._showDialogBox}>Add</FAB>
                <Portal>
                    <Dialog
                        visible={this.state.visible}
                        onDismiss={this._hideDialogBox}>
                        <Dialog.Title>Add Damages</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>
                                We will add anything that is require to add markers and get geo
                                location  here.
                            </Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button
                                style={styles.button}
                                mode='contained'
                                onPress={this._hideDialogBox}>Done</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </Provider>



        );
    }
}
