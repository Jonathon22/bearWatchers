

const bearForm = () => {
  $("#bearForm").append(`<form>
    <div class="form-group">
      <label for="bear name">Bear Name</label>
      <input class="form-control" id="bearInputName" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
      <label for="ImageURl">Image URL</label>
      <input class="form-control" id="bearInputImage">
    </div>
    <button id="submit" type="submit" class="btn btn-primary">Submit</button>
  </form>`) 

}
const bears = [];


const clearForm = () => {
  $('#bearInputName').val('');
    $('#bearInputImage').val('');
}
const getValues = () => {
  $("#submit").click( () => {
    let bear = {};
    bear.bearName = $('#bearInputName').val();
    bear.bearImage = $('#bearInputImage').val();

    bears.push(bear);
      clearForm();
      console.log(bears);
  });
};


export { bearForm, getValues }