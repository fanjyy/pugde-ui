<template>
	<div class="_highlight">
        <pre>
            <code ref="code"></code>
        </pre>
		<slot></slot>
    </div>
</template>
<script>
require('../../assets/js/highlight.pack.js');

export default{
	name:"Highlight",
	props:{
	},
	data(){
		return {

		}
	},
	created(){
		this.$nextTick(()=>{
			this.$refs.code.innerText = this.$slots.default[0].elm.innerHTML
			hljs.highlightBlock(this.$refs.code);
		})
	}
}
</script>
<style lang="stylus">
._highlight
	padding-bottom 20px
	overflow hidden
	/* Atelier-Cave Comment */
	.hljs-comment
	.hljs-quote 
		color #7e7887
	/* Atelier-Cave Red */
	.hljs-variable
	.hljs-template-variable
	.hljs-attribute
	.hljs-regexp
	.hljs-link
	.hljs-tag
	.hljs-name
	.hljs-selector-id
	.hljs-selector-class 
		color #be4678
	/* Atelier-Cave Orange */
	.hljs-number
	.hljs-meta
	.hljs-built_in
	.hljs-builtin-name
	.hljs-literal
	.hljs-type
	.hljs-params 
		color #aa573c
	/* Atelier-Cave Green */
	.hljs-string
	.hljs-symbol
	.hljs-bullet 
		color #2a9292
	/* Atelier-Cave Blue */
	.hljs-title
	.hljs-section 
		color #576ddb
	/* Atelier-Cave Purple */
	.hljs-keyword
	.hljs-selector-tag 
		color #955ae7
	.hljs-deletion
	.hljs-addition 
		color #19171c
		display inline-block
		width 100%
	.hljs-deletion 
		background-color #be4678

	.hljs-addition 
		background-color #2a9292
	.hljs 
		display block
		overflow-x auto
		color #8b8792
		padding 0.5em
		font-size 12px
	.hljs-emphasis 
		font-style italic
	.hljs-strong 
		font-weight bold
	pre
		margin 0
		padding 0
		background #19171c
		max-height 400px
		overflow auto
		display block
</style>