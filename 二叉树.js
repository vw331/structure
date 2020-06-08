'use strict';

const INSERT_RECUSIVE = Symbol('BST#recursiveInsert')
const SEARCH_RECUSIVE = Symbol('BST#recursiveSearch')
const PRE_ORDER_TRAVERSE_RECUSIVE = Symbol('BST#preOrderTraverse')
const IN_ORDER_TRAVERSE_RECUSIVE = Symbol('BST#inOrderTraverse')
const POST_ORDER_TRAVERSE_RECUSIVE = Symbol('BST#postOrderTraverse')
const DESTROY_RECUSIVE = Symbol('BST#destroy')

class BSTree {

	constructor() {
		this.root = null;
		this.count = 1;
		this.Node = function(value) {
			return {
				value,
				count: 1,
				left: null,
				right: null
			}
		}
	}

	insert(value) {
		this.root = this[INSERT_RECUSIVE](this.root, value) 
	}

	search(value) {
		return this[SEARCH_RECUSIVE](value)
	}

	// 前序遍历
	preOrderTraverse(callback) {
		this[PRE_ORDER_TRAVERSE_RECUSIVE](this.root, callback)
	}

	// 中序遍历
	inOrderTraverse(callback) {
		this[IN_ORDER_TRAVERSE_RECUSIVE](this.root, callback)
	}

	// 后序遍历
	postOrderTraverse(callback) {
		this[POST_ORDER_TRAVERSE_RECUSIVE](this.root, callback)
	}

	// 销毁
	destroy() {
		this[DESTROY_RECUSIVE](this.root)
	}

	// 插入节点
	[INSERT_RECUSIVE](node, value) {

		if(node === null) {
			return new this.Node(value)
		}
		if(node.value === value) {
			node.count++
		}else if(node.value > value){
			node.left = this[INSERT_RECUSIVE](node.left, value)
		}else if(node.value < value){
			node.right = this[INSERT_RECUSIVE](node.right, value)
		}
		return node
	}

	// 搜索节点
	[SEARCH_RECUSIVE](node, value) {
		if(node === null) {
			return false
		}
		if(node.value === value){
			return true
		}else if(node.left) {
			return this[SEARCH_RECUSIVE](node.left, value)
		}else if(node.right){
			return this[SEARCH_RECUSIVE](node.right, value)
		}
	}

	// 前序遍历
	[PRE_ORDER_TRAVERSE_RECUSIVE](node, callback) {
		if(node !== null){
			callback(node.value)
			this[PRE_ORDER_TRAVERSE_RECUSIVE](node.left, callback)
			this[PRE_ORDER_TRAVERSE_RECUSIVE](node.right, callback)
		}
	}

	// 中序遍历
	[IN_ORDER_TRAVERSE_RECUSIVE](node, callback) {
		if(node !== null) {
			this[IN_ORDER_TRAVERSE_RECUSIVE](node.left, callback)
			callback(node.value)
			this[IN_ORDER_TRAVERSE_RECUSIVE](node.right, callback)
		}
	}

	// 后序遍历
	[POST_ORDER_TRAVERSE_RECUSIVE](node, callback) {
		if(node !== null) {
			this[POST_ORDER_TRAVERSE_RECUSIVE](node.left, callback)
			this[POST_ORDER_TRAVERSE_RECUSIVE](node.right, callback)
			callback(node.value)
		}
	}

	// 销毁
	[DESTROY_RECUSIVE](node) {
		if (node !== null) {
      this[DESTROY_RECUSIVE](node.left);
      this[DESTROY_RECUSIVE](node.right);

      node = null;
      this.count--;
      return node;
    }
	}

	find(node) {

	}

	getMinNode() {

	}
		
	getMaxNode() {

	}

}