use std::error::Error;
use std::fs;
use serde::Deserialize;
use toml::from_str;

#[derive(Deserialize, Debug, Clone, serde::Serialize)]
pub struct PlaylistItem {
  pub platform: String,
  pub url: String,
  pub title: String,
  pub loops: bool,
  pub yt_video_id: String,
  pub file_type: String,
}

// impl PlaylistItemBuilder {
//   pub fn new() -> PlaylistItemBuilder {
//     PlaylistItemBuilder { command_type: CommandType::Play, track_url: "".to_string() }
//   }

//   pub fn command_type(&mut self, command: CommandType) -> &mut MusicCommandBuilder {
//       self.command_type = command;
//       self
//   }

//   pub fn track_url(&mut self, url: String) -> &mut MusicCommandBuilder {
//       self.track_url = url;
//       self
//   }

//   pub fn finalize(&self) -> MusicCommand {
//       MusicCommand { command_type: self.command_type, track_url: self.track_url.clone() }
//   }
// }

#[derive(Deserialize, serde::Serialize)]
pub struct Config {
    pub token: String,
    pub playlist1: PlaylistItem,
    pub playlist2: PlaylistItem,
    pub playlist3: PlaylistItem,
    pub playlist4: PlaylistItem,
    pub playlist5: PlaylistItem,
    pub playlist6: PlaylistItem,
}

pub fn read_config_file() -> Result<String, Box<dyn Error>> {
    let config_toml = fs::read_to_string("config.toml")?.parse()?;
    Ok(config_toml)
}

pub fn parse_config() -> Result<Config, Box<dyn Error>> {
    let config_toml = read_config_file().unwrap();
    let config: Config = from_str(&config_toml)?;

    Ok(config)
}

#[tauri::command]
pub fn unwrap_config() -> Config {
  parse_config().unwrap()
}
