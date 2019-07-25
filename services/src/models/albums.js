const fs = require("fs").promises;

let data = [];
const DATA_PATH = "../../data/albums.json";

function copyPhotos() {
  // TODO: copy over photoPath into an album folder.
  // what does the album folder structure look like?
  // it should be able to handle 1000s of photos...

  // Or, just create id,name here, and the frontend
  // has to call /albums/:id/photos to do uploading...

  throw new Error("Method not Implemented yet");
}

let diskOp = Promise.resolve();
async function saveFile() {
  await diskOp; // If the last diskOp was still pending, await for it.
  diskOp = fs.writeFile(DATA_PATH, JSON.stringify(data));
}


module.exports = {
  async getAll() {
    if (!data.length) {
      const contents = await fs.readFile(DATA_PATH);
      data = JSON.parse(contents);
    }
    return data;
  },

  async create({ id, name, photoPath }) {
    if (data.find(album => album.id === id || album.name === name)) {
      throw new Error("ID or name already taken");
    }

    copyPhotos(photoPath);
    data.push({ id, name, photoPath });

    await saveFile();

    return id;
  },

  async update({ id, name, photoPath }) {
    const index = data.findIndex(album => album.id === id);

    if (index === -1) {
      throw new Error("album not found");
    }

    data[index] = { id, name, photoPath };

    copyPhotos(photoPath);
    data.push({ id, name, photoPath });

    await saveFile();

    return id;
  },

  async delete(id) {
    const index = data.findIndex(album => album.id === id);
    if (index > -1) {
      data.splice(index, 1);
    }

    await saveFile();
  },

  close() {
    // if we're shutting down, we want to make sure saving is finished...
    return diskOp;
  },
};
