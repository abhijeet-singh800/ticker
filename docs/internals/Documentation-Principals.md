We will first briefly mention the Principals on which the documentation for this repository is written after that we will discuss how these principals are applied to current repository.

# Documentation Principals 
There are four aspects of a documentation of a product and those are listed below
- Tutorial 
- How To Guides 
- Reference
- Explanation  

### Tutorials 
Take the readers by the hand through a series of practical.  

#### What it is 
- A tutorial is Repeatable 
- A tutorial instills confidence in the Reader 
- Must result in success , every time for every learner
- Is Concrete and Particular
- Intended for a beginner.

#### Whats its not 
- An abstraction or generalization about the operation of the product
- An explanation of how things work
- An catalog of all the choices you have while using the product 
- Information about the product.

> [!NOTE]
> You may be tempted to write a tutorial with the concepts of 'Whats its not' you must resist these temptation.


### How to Guides 
They are basically recipes of tasks of some types and take reader through the steps required to complete a specific task

#### Nature of the How to Guides 
- It has a practical utility
- It has a clear objective that is achieved by the guide 
- It serves an already competent user. This meas it is intended for an intermediate and advanced user. Without any extra materials for the user and thus have clear concise points for the reader to follow

> [!NOTE]
> A tutorial is intended for a beginner and an How to Guide is not thus its not to be confused with an Tutorial.

- The language of the How to Guide is `to achieve this, do that`
- A How to Guide only contains action and only action.
- It has not obligation to the needs of a learner and this has no accommodations for digression , explanation or teaching

### Reference 
It is a technical description of the Machinery of the Product.

#### Nature of the Reference 
- An reference is correct and is complete that is it contains information about all the aspects of the product and it always correct.
- An reference is generally answers and facts , it is not written by keeping the needs of readers in mind.
- It is austere and uncompromising this means that an reference guide is written in a strict manner and not for readers that expect and easygoing nature as it aims to be uncompromising in properly explaining the products using factual information.
- An reference is neutral and objective and is factual in nature.
- An reference guide is structured according to the machinery itself.

### Explanations
Explanations are discussions that illuminates and clarifies a particular topic. They discuss the reasons and arguments for why things are as they are about the product and they may also discuss the underling principle on which the product functions.

#### Nature of the Explanations 
- The purpose of the explanations is offer the context and establishes connection between between topics of the machinery
- The explanations are filled with the answers for the person who want to learn more about the product.
- It deepens the theoretical understanding of the practical craft of the product.
- It is more concerned wit the bigger picture of things.
- It contains the history of the product.
- It also contains the choices, alternatives and possibilities for the product.
- It also comes with the reasons and justifications for the way of things in the inner working of the product.


## Similarities of Domains
These four different domains of the documentation have some similarities between them. In this section we will explore these  similarities so that we are able of avoid them during writing the documentation of the products.

Due to the similarities between the domains there exist and inherent tension between them that pulls them together and a writer must write the documentation should write the docs keeping this in mind and thus aiming to keep all these domains separate and well organized.

#### Overlaps between Tutorials and How to Guides
Both of these domains are similar as they both describe the practical steps that one need to achieve a goal differentiated only be the fact that tutorials are meant for a beginner and how to guides are targeted towards a intermediate or advanced user.

#### Overlaps between How to Guides and References
These are similar because they both serve our work this means that they are actually what we need when we are working as How to guides does not contain any extra material that we don't need but if for some reason we do realize that we need those explanations we can choose to look into reference section of the documentation

#### Overlap between References and Explanations
Explanations and References are similar because they both deal with the theoretical knowledge of the inner working of the product

#### Overlap between References and Tutorials
Tutorials and References are similar because that both serve our study of the subject, this mean they help us to gain basic understanding of the product with tutorials and then get an deeper understanding with the explanations in the docs.

> [!NOTE]
> For more information on this framework watch [DjangoCon 2020 | What You Need to Know About Your Documentation - Daniele Procida](https://www.youtube.com/watch?v=qC1OYK5oqDo)

# Implementation 
The documentation efforts for this project are divided into three domains.
- Usage 
- Contributions 
- Internals

## Usage 
This section will provide easy to tutorials. Developers are requested to test the guide themselves before publishing them as the guide for the beginners.

## Contribution 
This section will provide well defined how to guides for developers contributing to this project. These guides aim to be almost a reliable Copy Paste experience for the developers using it. 

## Internals
This contains in-depth technical documentation for all the files for the project. Documentation in this section aim to mirror the logical structure of the repository so as to provide an deep understanding of every part of the project to its user. This is mainly concerned about providing reference and explanations regarding the repository.

Given below is an suggestive framework to properly explain a Logical Unit (LU) in the repository , these LUs can sometimes be files or folder in which case its underlying files and folder also need the same framework to explain subsequent units recursively.

```md
## Name of the LU (File / Folder)

## Purpose of the LU

## How this LU achieves its Goal 

## Caveats related to this LU
```
> [!NOTE]
> In an effort to make the wiki effective all the developers are requested to add Photos or GIFs whenever the reader is expected to interact with an GUI element of the process or a code snippet/command when interacting with a CLI interface.

## About Us 
Apart from the above mentions domains we also have the About Us section of the wiki that contains non-technical stuff related to the repo. These are 
- Future Vision
- Contributor Mailing List
- Security Policy 
- License

