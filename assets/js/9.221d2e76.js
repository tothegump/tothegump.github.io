(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{294:function(e,t,n){"use strict";n.r(t);var r=n(4),o=Object(r.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"_2019-03-31"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2019-03-31","aria-hidden":"true"}},[e._v("#")]),e._v(" 2019-03-31")]),e._v(" "),n("p",[n("strong",[e._v("# 1.Algorithm")])]),e._v(" "),n("blockquote",[n("p",[e._v("每周至少做一个 leetcode 的算法题")])]),e._v(" "),n("p",[e._v("额，依然做一个简单的吧。\n"),n("a",{attrs:{href:"https://leetcode.com/problems/binary-tree-level-order-traversal-ii/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Binary Tree Level Order Traversal II - LeetCode"),n("OutboundLink")],1)]),e._v(" "),n("blockquote",[n("p",[e._v("Given a binary tree, return the"),n("em",[e._v("bottom-up level order")]),e._v("traversal of its nodes’ values. (ie, from left to right, level by level from leaf to root).")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("# Definition for a binary tree node.\n# class TreeNode:\n#     def __init__(self, x):\n#         self.val = x\n#         self.left = None\n#         self.right = None\n\nclass Solution:\n    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:\n        return self.travel(root)\n\n    def travel(self, root):\n        if not root:\n            return []\n        queue = []\n        stack = []\n        current_list = []\n        queue.append(root)\n        queue.append('#')\n        while queue:\n            parent = queue.pop(0)\n            if parent == '#':\n                if current_list:\n                    stack.append(current_list)\n                current_list = []\n                if queue:\n                    queue.append('#')\n                continue\n            else:\n                current_list.append(parent.val)\n            if parent.left:\n                queue.append(parent.left)\n            if parent.right:\n                queue.append(parent.right)\n        stack.reverse()\n        return stack\n")])])]),n("p",[n("strong",[e._v("# 2.Review")])]),e._v(" "),n("blockquote",[n("p",[e._v("阅读并点评至少一篇英文技术文章\n这个完成了上周预留的坑，这篇文章还是不错的。不过重要的是，看下代码，思考一下具体实现。\n一个简易的用 Python 语言实现的 Python 解释器。非常不错的文章，可以简单了解 Python 解释器的原理。")])]),e._v(" "),n("p",[n("a",{attrs:{href:"http://aosabook.org/en/500L/a-python-interpreter-written-in-python.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("A Python Interpreter Written in Python"),n("OutboundLink")],1)]),e._v(" "),n("p",[n("strong",[e._v("# 3.Tip")])]),e._v(" "),n("blockquote",[n("p",[e._v("学习至少一个技术技巧")])]),e._v(" "),n("ul",[n("li",[e._v("Linux 系统优化--上下文切换")]),e._v(" "),n("li",[e._v("开始了解 Ansible")])]),e._v(" "),n("p",[n("strong",[e._v("# 4.Share")])]),e._v(" "),n("blockquote",[n("p",[e._v("分享一篇有观点和思考的技术文章"),n("br"),e._v("\n本周输出：\nPython 的 Kafka 客户端，文艺范十足的 Faust ，好用。\nhttp://blog.tothegump.com/python/python_kafka_faust.html")])])])},[],!1,null,null,null);t.default=o.exports}}]);