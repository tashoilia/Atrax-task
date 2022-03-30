import React, {useState, useEffect, useCallback} from 'react'
import MovieCard from '../../components/HomeComponents/MovieCard/MovieCard'
import { fetchMovies, filterMovieByGenre, filterMovieByRating } from '../../requests/api'
import "./Homepage.css"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import { filterMovieKeys } from '../../definers/filterMovieKeys'

const Homepage = () => {
  const [moviesList, setMovieList] = useState()
  const [genreFilter, setGenreFilter] = useState('')
  const [ratingFilter, setRatingFilter] = useState('')
  const [open, setOpen] = useState(false);

  const handleGenreFilter = useCallback(async (event) => {
    let val = event.target.value
    setGenreFilter(val);
    setMovieList()
    await filterMovieByGenre(val).then(res => {
      setMovieList(res.results)
      setOpen(true)
    })
  }, [genreFilter]);

  const handleRatingFilter = useCallback(async (event) => {
    let val = event.target.value
    setRatingFilter(val);
    setMovieList()
    await filterMovieByRating(val).then(res => {
      setMovieList(res.results)
      setOpen(true)
    })
  }, [ratingFilter]);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchMovies().then(res => {
      setMovieList(res.results)
    })
  }, [])
  console.log(moviesList);
  return (
    <div className='home-wrapper'>
      <div className="filters-wrapper">
        <Box sx={{ minWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">{genreFilter || "Filter genre"}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={genreFilter}
            label="Filter"
            onChange={handleGenreFilter}
          >
            {filterMovieKeys.genres.map(genre => 
              <MenuItem key={genre.key} value={genre.value}>{genre.value}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel>{ratingFilter || "Filter rate"}</InputLabel>
          <Select
            value={ratingFilter}
            label="Filter"
            onChange={handleRatingFilter}
          >
            {filterMovieKeys.rating.map(rating => 
              <MenuItem key={rating.key} value={rating.value}>{rating.value}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
      </div>
      
      <div className='movies-wrapper'>
        {!!moviesList ? 
          moviesList?.map(movie => <MovieCard {...{movie}}/>) : <h1>LOADING</h1>}
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Success"
      />
    </div>
  )
}

export default Homepage