import React, {Component} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default class PlantPhoto extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
      images: null,
    };
  }

  pickSingleWithCamera(cropping, mediaType = 'photo') {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      includeExif: true,
      mediaType,
    })
      .then(image => {
        console.log('received image', image);
        this.setState({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          },
          images: null,
        });
      })
      .catch(e => alert(e));
  }

  cleanupImages() {
    ImagePicker.clean()
      .then(() => {
        console.log('removed tmp images from tmp directory');
      })
      .catch(e => {
        alert(e);
      });
  }

  cleanupSingleImage() {
    let image =
      this.state.image ||
      (this.state.images && this.state.images.length
        ? this.state.images[0]
        : null);
    console.log('will cleanup image', image);

    ImagePicker.cleanSingle(image ? image.uri : null)
      .then(() => {
        console.log(`removed tmp image ${image.uri} from tmp directory`);
      })
      .catch(e => {
        alert(e);
      });
  }

  cropLast() {
    if (!this.state.image) {
      return Alert.alert(
        'No image',
        'Before open cropping only, please select image',
      );
    }

    ImagePicker.openCropper({
      path: this.state.image.uri,
      width: 200,
      height: 200,
    })
      .then(image => {
        console.log('received cropped image', image);
        this.setState({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          },
          images: null,
        });
      })
      .catch(e => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  }

  pickSingle(cropit, circular = false, mediaType) {
    ImagePicker.openPicker({
      width: 500,
      height: 500,
      cropping: cropit,
      cropperCircleOverlay: circular,
      sortOrder: 'none',
      compressImageMaxWidth: 1000,
      compressImageMaxHeight: 1000,
      compressImageQuality: 1,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
      cropperStatusBarColor: 'white',
      cropperToolbarColor: 'white',
      cropperActiveWidgetColor: 'white',
      cropperToolbarWidgetColor: '#3498DB',
    })
      .then(image => {
        console.log('received image', image);
        this.setState({
          image: {
            uri: image.path,
            width: image.width,
            height: image.height,
            mime: image.mime,
          },
          images: null,
        });
      })
      .catch(e => {
        console.log(e);
        Alert.alert(e.message ? e.message : e);
      });
  }

  scaledHeight(oldW, oldH, newW) {
    return (oldH / oldW) * newW;
  }

  renderImage(image) {
    return (
      <Image
        style={{width: 300, height: 300, resizeMode: 'contain'}}
        source={image}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.image ? this.renderAsset(this.state.image) : null}
          {this.state.images
            ? this.state.images.map(i => (
                <View key={i.uri}>{this.renderAsset(i)}</View>
              ))
            : null}
        </ScrollView>

        <TouchableOpacity
          onPress={() => this.pickSingleWithCamera(false)}
          style={styles.button}>
          <Text style={styles.text}>Select Single Image With Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.pickSingleWithCamera(true)}
          style={styles.button}>
          <Text style={styles.text}>
            Select Single With Camera With Cropping
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.pickSingle(false)}
          style={styles.button}>
          <Text style={styles.text}>Select Single</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.cropLast()} style={styles.button}>
          <Text style={styles.text}>Crop Last Selected Image</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.pickSingleBase64(false)}
          style={styles.button}>
          <Text style={styles.text}>Select Single Returning Base64</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.pickSingle(true)}
          style={styles.button}>
          <Text style={styles.text}>Select Single With Cropping</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.pickSingle(true, true)}
          style={styles.button}>
          <Text style={styles.text}>Select Single With Circular Cropping</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.pickMultiple.bind(this)}
          style={styles.button}>
          <Text style={styles.text}>Select Multiple</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.cleanupImages.bind(this)}
          style={styles.button}>
          <Text style={styles.text}>Cleanup All Images</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.cleanupSingleImage.bind(this)}
          style={styles.button}>
          <Text style={styles.text}>Cleanup Single Image</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
