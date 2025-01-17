import { Router } from "express";
import {
  getAllSongs,
  newChord,
  getSong,
  getSignedUrl,
  getSongImageUrl,
    getSongsById
} from "../controllers/SongListControllers"; // Adjust the path as necessary

const router: Router = Router();

router.get("/", getAllSongs);
router.post("/newChord", newChord);
//search for a song
router.get("/song", getSong);
//get signed url
router.get("/song/:id/image", getSongImageUrl);

//get song by id
router.get("/song/:id", getSongsById);


export default router;
