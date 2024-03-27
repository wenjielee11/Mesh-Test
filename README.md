# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Mesh-Test
Before you run, please make sure you completed the pipeline at https://github.com/wenjielee11/Wisc-HCI_scripts/

1) Copy paste your robot folder to src/MeshLoaders/your_robot_folder
2) Replace the dictionaries `items:{}, tfs:{},` in src/Store.js
3) Copy paste the `tfs` and `items` from tfs_items.json generated by urdf_parser.py into Store.js. Remove the quotes on `"tfs"`, `"items"`
4) Now double check base_link (or any of its variations where its the base of the robot and the root of all meshes) exists in items and tfs. The script automatically generates a "base_link" for you, but it may not be accurate so you have to manually remove it and change it to your robot's.
5) Make sure the base_link's frame points to "world" in "tfs". the frame of your base_link in items should just be its own name. This should have been generated for you automatically.
6) copy your MeshLookup.js from your robot file bundle and paste it in src/Meshlookup.js.
   
## To test things manually
1) remove all entries from tfs and items in src/Store.js.
2) Add an entry like this. ![image](https://github.com/wenjielee11/Mesh-Test/assets/96722108/66f52fe2-5bed-407c-bc57-bdccaae6f5de), where the shape of the link in item is the corresponding <mesh filename=""> in the urdf file.
   It should contain a duplicate entry in tfs like in the picture, but it's frame is pointing to the parent. In this case you can use 'world"

## To run:
-`npm install`
-`npm run dev`
