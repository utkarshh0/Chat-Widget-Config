# Chat Widget Configuration Tool

This project is a **Single Page Application (SPA)** designed to configure a chat widget. The tool allows users to customize settings like the bot name, font, colors, and images (avatar and launcher) for the widget, with real-time updates in the preview. Users can download the configuration as a JSON file and load previous configurations as needed.


## Features

- **Live Configuration**: 
  - Users can modify various settings such as **Config Name**, **Bot Name**, **Font Family**, **Header Color**, **Background Color**, **Avatar Image**, and **Launcher Image**.
  
- **Live Preview**: 
  - Changes to configuration are instantly reflected in the live preview without requiring a page reload.

- **Download Config**: 
  - Save the current configuration as a `.json` file. The filename is based on the **Config Name** provided by the user.

- **Load Config**: 
  - Load previously saved configuration files to update the form and preview.


## Instructions

### 1. Download the Repository


### 2. Install Dependencies

    - cd chat-widget-config
    - npm install

### 3. Run the Application

    - npm run dev


This will launch the application on http://localhost:5173. Open this URL in your browser to start using the chat widget configuration tool.


## Usage

### Modify Settings:
- You can modify various fields, including:
  - **Config Name**: A string input for naming the configuration.
  - **Bot Name**: A string input for the name of the chat bot displayed at the top of the widget header.
  - **Font Family**: A dropdown with options for font families.
  - **Header Color**: A color picker for selecting the chat widget's header color.
  - **Header Font Color**: A color picker for selecting the chat widget's header text color.
  - **Background Color**: A color picker for selecting the background color of the chat content area.
  - **Chat Font Color**: A color picker for custom text color inside the chat body.
  - **Avatar Image**: An input link or file upload to allow users to add a profile image for the bot.
  - **Launcher Image**: An input link or file upload for customizing the launcher icon of the chat widget.

- Changes made in the form are instantly reflected in the live preview on the right side.

### Download Configuration:
- After modifying the configuration, click the **Download Config** button to download the current settings as a `.json` file.
- The filename will be the **Config Name** provided by the user.

### Load Configuration:
- To load a previously saved configuration, click on the **Load Config** button.
- This will allow you to upload a `.json` file, and the form and live preview will update according to the loaded configuration.

 
