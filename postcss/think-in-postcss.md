# Some things you may think about PostCSS... and you might be wrong

I have recently tried PostCSS in some of my different workflows - Meteor workflow, simple React, and Webpack workflow. 
I knew I needed to try it because everyone is so excited to use it and it did not disappoint me. You'll read about some 
thoughts I had of PostCSS before I learned what it was, so this is probably an article for people who don't use PostCSS yet.  

我不久前在 Meteor，React 和 webpack 这些不同的工作流中尝试了 PostCSS。 我知道我得去尝试它因为每个人都乐意使用它， 并且它没有让我失望。 你会看
到我在学习 PostCSS 之前对它的一些看法， 所以这篇文章适合那些还没有学习 PostCSS 的人学习。  

Here are the things you may be thinking about PostCSS now:  
1. You’re probably thinking that this is a preprocessor replacement.
2. You’re probably thinking that it’s hard to add it into your current workflow.
3. You probably don't know that you’re already using it with the Autoprefixer plugin.
4. You’re probably thinking that you don't need it.
5. You'll probably love it if you use it.

这些可能是你现在对 PostCSS 的看法：
1. 你可能认为它是用来取代预处理器的。
2. 你可能认为它很难加入到你当前的工作流中。
3. 你可能不知道你已经用上了它的 Autoprefixer 插件。
4. 你可能认为你用上它。
5. 一旦你用上你很可能会离不开它。

I'll try to clarify these one by one. This is of course only my own personal opinion, but I 
think that many people could have similar thoughts.

我将会一条一条澄清，当然这只是我个人看法，但是我相信其他人也会有相同的看法。

## You're probably thinking that this is a preprocessor replacement.

Of course it isn't. PostCSS is a JavaScript tool which will read your CSS with special 
additional syntax and will process it and return normal CSS code. What does that mean 
for you? It means that you can still use your favourite preprocessor like you used 
to do and you can also use PostCSS in the areas where preprocessors can't be useful 
such as linting, autoprefixing or CSS4 features. It means that you are able to write 
your own logic in a form of a PostCSS plugin which will act as you want it to. 
There are plenty of plugins for PostCSS which you can find here: 
[http://postcss.parts/](http://postcss.parts/)  but the biggest strength of PostCSS is 
that you can also write your own custom plugins for it. This is a great part because it is 
very modular. You can use only those parts which you really need. Take a look at the official 
[plugin development documentation](https://github.com/postcss/postcss/blob/master/docs/writing-a-plugin.md).  

当然不是，PostCSS 是一个 JavaScript 工具， 用特殊的额外的语法解析你的 CSS 并返回普通的 CSS 代码。这对你
来说意味着什么？这意味着你依然可以用你最喜欢的 CSS 预处理器并且你还可以在预处理器无法使用的领域中使用 PostCSS
比如 linting，autoprefixing 和 CSS4 特性。这意味着你能够以 PostCSS 插件的形式编写自己的逻辑，它将按你想要的方式工作。
PostCSS 有很多插件，你可以在这里找到：[http://postcss.parts/](http://postcss.parts/)，但 PostCSS 的最大
的优点是你也可以为它写自己的自定义插件。这是个超级大新闻因为它是模块化的。你可以只使用那些你需要的模块。
看看官方[插件开发文档](https://github.com/postcss/postcss/blob/master/docs/writing-a-plugin.md)。

Just remember that this isn’t a preprocessor replacement although it could replace it if you wanted it to. 
For a great example, just take a look at the [PreCSS](https://github.com/jonathantneal/precss) plugin pack. 
This is a toolset with many PostCSS plugins which can replace your Sass preprocessor.  

请注意 PostCSS 不是用来取代预处理器，虽然它可以取代。这有一个很好的例子 [PreCSS](https://github.com/jonathantneal/precss) 插件。
这是一个包含许多 PostCSS 插件的工具包，可以取代 Sass 预处理器。

If you got used to Stylus or Sass, you'll still be able use it. After preprocessing you can also use 
PostCSS processing with plugins.  

如果你习惯了 Stylus 或 Sass，你仍然可以使用它。在预处理器处理后，你还可以再使用 PostCSS 插件处理。

## You're probably thinking that it's hard to add it into your current workflow.

You probably use some kind of build tools like Gulp or Grunt or Webpack. If so, you just have to install the proper plugin for PostCSS.
You will find Grunt tasks, [Gulp tasks](https://github.com/postcss/postcss#gulp) and [Webpack loaders](https://github.com/postcss/postcss#webpack)
for it. You can also use it in every [NodeJS based API](https://github.com/postcss/postcss#usage).  

你可能使用了 Gulp，Grunt 或 Webpack 等构建工具。如果是这样，你只需要为 PostCSS 安装适当的插件。你可以找到适用于 PostCSS 的 Grunt tasks, 
[Gulp tasks](https://github.com/postcss/postcss#gulp) 和 [Webpack loaders](https://github.com/postcss/postcss#webpack)。你也
可以使用底层的[Node API](https://github.com/postcss/postcss#usage).

It is also used by many big companies. It is integrated in many well known frameworks and workflows. Just take a look at the list of [runners](http://julian.io/some-things-you-may-think-about-postcss-and-you-might-be-wrong/).  
(For your interest my Meteor package is listed there as well, so check it out!).  

它被许多大公司使用，也被集成到许多流行的框架和工作流中。查看完整的[列表](https://github.com/postcss/postcss#runners)。  

Usage is as simple as the usage of every preprocessor. It depends on your current workflow and tools stack, 
but it is very modular and flexible. You can choose only some of the plugins which you really need. You don't need to install all features like with preprocessors.

用法和每个预处理器的用法一样简单。它取决于您当前的工作流和工具栈，但它是非常模块化和灵活的。你可以只选择一些你真正需要的插件。您不需要像预处理器一样安装所有功能。

## You probably don't know that you’re already using it with the Autoprefixer plugin.

The funniest thing is that many people use Autoprefixer and they don't know that, in fact, they are using PostCSS behind the scenes. 
This is a really very common situation. Autoprefixer is used as a task for Grunt, Gulp and other workflows and build systems. 
It is nothing else but another PostCSS plugin which is responsible for taking your CSS, checking its compatibility with browsers 
and adding special prefixes to your CSS declarations if needed. This is a very good example of what your PostCSS plugins can do.  

有趣的是，许多人使用 Autoprefixer，他们不知道，事实上，幕后使用的是 PostCSS。这是一个非常普遍的情况。Autoprefixer 用作 Grunt task, Gulp 和许多
其他的工作流和构建系统。它只是另一个 PostCSS 插件，负责读取你的CSS，检查其与浏览器的兼容性，并在需要的时候添加特殊的 CSS 前缀。这是一个很好的例子，
说明 PostCSS 插件可以做什么。

There are a couple plugins for preprocessors which implement Autoprefixer. The most used are [autoprefixer-stylus](https://www.npmjs.com/package/autoprefixer-stylus)
and [less-plugin-autoprefix](https://www.npmjs.com/package/less-plugin-autoprefix) What they do is just make use of PostCSS and Autoprefixer plugin behind the scenes. 
You can check the 'package.json' file and you'll find PostCSS and Autoprefixer dependencies there.

有一些用于实现Autoprefixer的预处理器的插件。最常用的是 [autoprefixer-stylus](https://www.npmjs.com/package/autoprefixer-stylus) 和 [less-plugin-autoprefix](https://www.npmjs.com/package/less-plugin-autoprefix)
他们做的只是在幕后使用 PostCSS 和 Autoprefixer 插件。你可以检查'package.json'文件，你会发现 PostCSS 和 Autoprefixer 依赖。

There were some simple polls about it and this is quite funny but many people still don't know that 
[Autoprefixer is just a PostCSS plugin](https://twitter.com/PostCSS/status/677237345385635845). They are using it because it is awesome, and that’s ok, 
but they still don't know what they are able to do with PostCSS and their own plugins.  

有一些简单的调查，这是很有趣。但很多人仍然不知道 Autoprefixer 只是一个 PostCSS 插件。人们使用它，因为它是极好的，这没问题，但人们仍然不知道 PostCSS 和它的插件能做什么。

## You’re probably thinking that you don't need it.

Many people think that they don't need it. They think that they just use Sass or Stylus and that’s all they need. I understand that because 
in many cases it’s sufficient. But let's take a look at some use cases where the preprocessor is not enough.

许多人认为自己用不到 PostCSS。他们认为有 Sass 和 Stylus 就足够了。这我理解，因为许多情况下确实够用。但让我们来看看一些预处理器不够用的情况。  

Firstly, let’s talk about the Autoprefixer plugin. This is an awesome tool that everyone uses. They don't know that they 
are using PostCSS, and that’s ok, but this is a really good example of how powerful PostCSS is and how such tools are needed right now.  

首先，让我们谈谈 Autoprefixer 插件。这是一个很棒的工具，每个人都使用它。但人们不知道他们其实正在使用 PostCSS, 这没问题。
但这是一个非常好的例子，说明 PostCSS 是多么强大，我们正需要它。

The second example – Stylelint. Stylelint is an awesome PostCSS plugin which provides the tools for CSS linting and 
it has many configuration options. You can configure many rules such as not using id or special class names configured 
by RegExp etc. Take a look at the Stylelint docs: [http://stylelint.io/](http://stylelint.io/)

第二个例子 - Stylelint。Stylelint 是一个很棒的 PostCSS 插件， 提供针对 CSS 的 linting，并且包含了许多配置选项。
你可以配置许多规则，如没有用到的 id 或使用正则表达式制定类名。参考 [Stylelint 文档](http://stylelint.io/)。

Third example – Lost Grid System. Lost is a very good example. This is a very powerful grid system. It is written as a 
plugin for PostCSS. You can read more about it in the docs: [https://github.com/corysimmons/lost](https://github.com/corysimmons/lost)
It is an example to show you how simple it is to extend your standard CSS syntax and how helpful it is.

第三个例子 - Lost 网格系统。 Lost 是个很好的例子。这是一个非常强大的网格系统。它被写为 PostCSS 的插件您可以在文档中了解更多信息：[https://github.com/corysimmons/lost](https://github.com/corysimmons/lost)
这是一个例子，展示你如何简单地扩展你的标准 CSS 语法和它是多么有帮助。

The last example is CSSNext. This is a really cool toolset. With this PostCSS plugin, you can use future CSS4 syntax in your current 
apps. You can find all the cool features on the official website: [http://cssnext.io/features/](http://cssnext.io/features/)

最后一个例子是 CSSNext。这是一个非常酷的工具集。有了这个 PostCSS 插件，你可以在当前的应用程序中使用未来的 CSS4 语法。
你可以在官方网站上找到所有特性：[http://cssnext.io/features/](http://cssnext.io/features/)

