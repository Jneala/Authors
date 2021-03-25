const ArticleForm = props => {
    const {inputs, handleInputChange, handleSubmit, submitValue, errors} = props;

    return(
      <form onSubmit={handleSubmit} className="col-8 mx-auto">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
              type="text" 
              name="name" 
              className="form-control"
              onChange={handleInputChange}
              value={inputs.name}
              />
                <span className="text-danger">
                  {errors.name ?
                      errors.name.message : ''}
                </span>
            </div>
            
        <input type="submit" value={submitValue} className="btn btn-primary"/>
      </form>
    )
}

export default ArticleForm;
