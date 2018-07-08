<template>
	<div>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon3">domain</span>
            </div>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                  placeholder="https://pagenote.xyz" v-model="willAddDomain">
          </div>

          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon3">path</span>
            </div>
            <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"
                  placeholder="/note" v-model="willAddPath">
          </div>

          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Content</span>
            </div>
            <textarea class="form-control" aria-label="With textarea" v-model="willAddContent"></textarea>
          </div>

          <button @click="addNote"  class="btn btn-primary btn-sm btn-block" style="margin-top:5px">Add this note</button>
    </div>
</template>

<script type="text/javascript">
	export default {
		name: 'Add'
	}
</script>