<template>
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">{{note.domain}}</div>
        <div class="card-body">
          <h5 class="card-title">{{note.title}}</h5>
          <p class="card-text">{{note.content}}</p>
        </div>
      </div>
</template>

<script type="text/javascript">
	export default {
		name: 'Card',
		props: ["note"]
	}
</script>