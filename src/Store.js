import { create } from 'zustand';
import { Timer} from './Timer'
const useStore = create((set, get) => ({
  ip: '',
  blocks: {},
  Start: {},
  lines:{},
  hulls:{},
  texts:{},
  points:{},
  widgets:{},
  clock: new Timer(),
  tfs: {
    // "base_link": {
    //   frame: "world",
    //   position: { "x": 0, "y": 0, "z": 0 },
    //   rotation: { "w": 1, "x": 0, "y": 0, "z": 0 },
    //   scale: { "x": 1, "y": 1, "z": 1 }
    // }
  },
  items: {
    // "test":{
    //   shape: "package://stretch_description/meshes/link_head_tilt.STL",
    //   name: "test",
    //   frame: "world", 
    //   position: { "x": 0, "y": 0, "z": 0 },
    //   rotation: { "w": 1, "x": 0, "y": 0, "z": 0 }, 
    //   color: { "r": 1, "g": 1, "b": 1, "a": 1 },
    //   scale: { "x": 10, "y": 10, "z": 10 }, 
    //   highlight: "false"
    // }
  },

  setIp: (ip) => set({ ip }),
  addBlock: (id, json) => set((state) => ({
    blocks: { ...state.blocks, [id]: json }
  })),
  removeBlock: (id) => set((state) => {
    // Create a new object excluding the block with the given id
    const newBlocks = Object.keys(state.blocks).reduce((acc, currentId) => {
      if (currentId !== id) {
        acc[currentId] = state.blocks[currentId];
      }
      return acc;
    }, {});

    // Update the state with the new blocks object
    return { blocks: newBlocks };
  }),
  updateBlock: (id, updatedJson) => set((state) => ({
    blocks: { ...state.blocks, [id]: updatedJson }
  })),
  updateTfs: (newTfs) => set({ tfs: newTfs }),
  updateItems: (newItems) => set({ items: newItems }),
  getBlock: (id) => get().blocks[id],

  getBlocksByType: (type) => {
    const blocks = get().blocks;
    return Object.values(blocks).filter(block => block.type === type)[0];
  },



  addBlocktoStart: (id, json) => set((state) => ({
    Start: { ...state.Start, [id]: json }
  })),
  removeBlockfromStart: (id) => set((state) => {
    // Create a new object excluding the block with the given id
    const newBlocks = Object.keys(state.Start).reduce((acc, currentId) => {
      if (currentId !== id) {
        acc[currentId] = state.Start[currentId];
      }
      return acc;
    }, {});

    // Update the state with the new blocks object
    return { Start: newBlocks };
  }),

}));

export default useStore;