function BST(){
	this.root  = null;

	function node(val){
		this.val = val;
		this.left = null;
		this.right = null;
	}

	this.pushByArr = function(arr){
		for(var i = 0; i < arr.length; i++){
			var nn = new node(arr[i]);
			console.log("New Node Val:", nn.val);
			this.push(nn);
		}
	};

	this.push = function(newNode){
		console.log("Node passed in:",newNode.val);
		if(this.root === null){
			this.root = newNode;
			console.log("New Root:", this.root.val);
			return;
		}
		var runner = this.root;

		while(runner){
			if(newNode.val < runner.val){
				if(runner.left === null){
					runner.left = newNode;
					console.log("New Left:", newNode.val);
					runner = null;
				} else {
					runner = this.root.left;
				}
			}
			else if(newNode.val > runner.val){
				if(runner.right === null){
					runner.right = newNode;
					console.log("New Right:", newNode.val);
					runner = null;
				} else {
					runner = runner.right;
				}
			}
		}

	};

	this.printOut = function(){
		var runner = this.root;
		while(runner){
			console.log(runner.val);
			runner = runner.right;
		}
	}
}
