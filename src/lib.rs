mod utils;

use photon_rs::{monochrome, conv, transform};
use photon_rs::channels::{alter_blue_channel, alter_green_channel, alter_red_channel};
use photon_rs::native::open_image_from_bytes;
use wasm_bindgen::prelude::*;

// External function from JavaScript to display an alert
#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn sepia_image(input_image: Vec<u8>) -> Vec<u8>{
    let mut photon_image = open_image_from_bytes(&input_image).unwrap();
     monochrome::sepia(&mut photon_image);
    let processed_image_data = photon_image.get_bytes();
    processed_image_data

}
#[wasm_bindgen]
pub fn grayscale_image(input_image: Vec<u8>) -> Vec<u8>{
    let mut photon_image = open_image_from_bytes(&input_image).unwrap();
    monochrome::grayscale(&mut photon_image);
    let processed_image_data = photon_image.get_bytes();
    processed_image_data

}
#[wasm_bindgen]
pub fn red_image(input_image: Vec<u8>) -> Vec<u8>{
    let mut photon_image = open_image_from_bytes(&input_image).unwrap();
    alter_red_channel(&mut photon_image,90);
    let processed_image_data = photon_image.get_bytes();
    processed_image_data

}
#[wasm_bindgen]
pub fn green_image(input_image: Vec<u8>) -> Vec<u8>{
    let mut photon_image = open_image_from_bytes(&input_image).unwrap();
    alter_green_channel(&mut photon_image,50);
    let processed_image_data = photon_image.get_bytes();
    processed_image_data

}
#[wasm_bindgen]
pub fn blue_image(input_image: Vec<u8>) -> Vec<u8>{
    let mut photon_image = open_image_from_bytes(&input_image).unwrap();
    alter_blue_channel(&mut photon_image,50);
    let processed_image_data = photon_image.get_bytes();
    processed_image_data

}
#[wasm_bindgen]
pub fn reset_image(input_image: Vec<u8>) -> Vec<u8>{
    let mut photon_image = open_image_from_bytes(&input_image).unwrap();
    let processed_image_data = photon_image.get_bytes();
    processed_image_data

}
#[wasm_bindgen]
pub fn blur_image(input_image: Vec<u8>) -> Vec<u8>{
    let mut photon_image = open_image_from_bytes(&input_image).unwrap();
    conv::box_blur(&mut photon_image);
    let processed_image_data = photon_image.get_bytes();
    processed_image_data
}
#[wasm_bindgen]
pub fn vertical_image(input_image: Vec<u8>) -> Vec<u8>{
    let mut photon_image = open_image_from_bytes(&input_image).unwrap();
    transform::flipv(&mut photon_image);
    let processed_image_data = photon_image.get_bytes();
    processed_image_data
}
#[wasm_bindgen]
pub fn horizontal_image(input_image: Vec<u8>) -> Vec<u8>{
    let mut photon_image = open_image_from_bytes(&input_image).unwrap();
    transform::fliph(&mut photon_image);
    let processed_image_data = photon_image.get_bytes();
    processed_image_data
}