import express from 'express';
import diaryService from '../services/diaryService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryService.getNonSensitiveEntries());
});

router.post('/', ( req, res) => {
  const newDiary = toNewDiaryEntry(req.body);
  const addedEntry = diaryService.addDiary(newDiary);
  res.json(addedEntry);
});

export default router;