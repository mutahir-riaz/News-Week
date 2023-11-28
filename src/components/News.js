import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import defaultImage from './wall.jpg';
import './width.css'
import InfiniteScroll from "react-infinite-scroll-component";

export class news extends Component {
  static defaultProps = {
    country: "pk",
    pageSize: "9"
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number
  }
  articles = [{
    "status": "ok", "totalResults": 1255,
    "source": {
      "id": "the-wall-street-journal",
      "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Schwarzenegger Says Dem and Republican Leadership Ranks Need Fresh Blood...",
    "description": "At WSJ Tech Live, the former California governor praises U.S. backing of Israel, says his AI future is up to his children",
    "url": "https://www.wsj.com/tech/schwarzenegger-says-democratic-and-republican-leadership-ranks-need-fresh-blood-4a311d67",
    "urlToImage": "https://images.wsj.net/im-869795/social",
    "publishedAt": "2023-10-17T12:00:03Z",
    "content": "Schwarzenegger Says Democratic and Republican Leadership Ranks Need Fresh BloodBy Oct. 17, 2023 12:39 am ET\r\nLAGUNA BEACH, Calif.—Aging leaders of the Republican and Democratic parties should step as… [+810 chars]"
  },
  {
    "source": {
      "id": "the-wall-street-journal",
      "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "It's Getting Too Expensive to Have Fun...",
    "description": "Prices for concert tickets and amusement-park entries have ballooned",
    "url": "https://www.wsj.com/economy/consumers/its-getting-too-expensive-to-have-fun-a59e9df8",
    "urlToImage": "https://images.wsj.net/im-867771/social",
    "publishedAt": "2023-10-17T12:00:03Z",
    "content": "It’s Getting Too Expensive to Have FunBy and Oct. 16, 2023 9:00 pm ET\r\nThe rising cost of fun is becoming a drag.Copyright ©2023 Dow Jones & Company, Inc. All Rights Reserved. 87990cbe856818d5eddac44… [+548 chars]"
  },
  {
    "source": {
      "id": "the-wall-street-journal",
      "name": "The Wall Street Journal"
    },
    "author": "Doug Cameron",
    "title": "Lockheed Martin Earnings Top Estimates Despite Budget Battle",
    "description": "Johnson & Johnson raises its full-year sales guidance",
    "url": "https://www.wsj.com/livecoverage/stock-market-today-dow-jones-10-17-2023",
    "urlToImage": "https://images.wsj.net/im-867581/social",
    "publishedAt": "2023-10-17T11:30:06Z",
    "content": "Lockheed Martin still expects to grow sales this year despite the budget morass that has left Pentagon spending stuck at prior-year levels and prevented defense companies from starting some new progr… [+548 chars]"
  },
  {
    "source": {
      "id": "the-wall-street-journal",
      "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "2,000 American Troops Prepare for Potential Deployment to Middle East...",
    "description": "The Israeli military said its airstrikes in Gaza killed a Hamas commander who led one of last weekend’s massacres of civilians. The region is bracing for Israeli forces to launch a ground offensive.",
    "url": "https://www.wsj.com/livecoverage/israel-hamas-war-gaza-palestinians",
    "urlToImage": "https://images.wsj.net/im-869254/social",
    "publishedAt": "2023-10-16T19:00:06Z",
    "content": "The U.S. military has selected roughly 2,000 troops to prepare for a potential deployment to support Israel, U.S. defense officials said. The troops are tasked with missions like advising and medical… [+529 chars]"
  }, {
    "source": {
      "id": "the-wall-street-journal",
      "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "How Conflict Tilting Global Power Balance in Favor of Russia, China...",
    "description": "Moscow and Beijing seek to ride the wave of solidarity with Palestinians while taking advantage of American distraction",
    "url": "https://www.wsj.com/world/how-the-israel-hamas-war-is-tilting-the-global-power-balance-in-favor-of-russia-china-6fe4710a",
    "urlToImage": "https://images.wsj.net/im-868885/social",
    "publishedAt": "2023-10-16T12:00:03Z",
    "content": "How the Israel-Hamas War Is Tilting the Global Power Balance in Favor of Russia, ChinaDUBAI—The war between Israel and Hamas isn’t just risking a regional conflagration. It is also affecting the glob… [+851 chars]"
  }, {
    "source": {
      "id": "the-wall-street-journal",
      "name": "The Wall Street Journal"
    },
    "author": "Katy Barnato, Jared S. Hopkins",
    "title": "Pfizer Stock Falls on Guidance Cut, Other Covid-19 Vaccine Makers Also Drop",
    "description": "Charles Schwab is set to report earnings this morning; Middle East is in focus",
    "url": "https://www.wsj.com/livecoverage/stock-market-today-dow-jones-10-16-2023",
    "urlToImage": "https://images.wsj.net/im-868821/social",
    "publishedAt": "2023-10-16T08:54:40Z",
    "content": "Stocks of Pfizer and rival Covid-19 vaccine makers fell in premarket trading after the drugmaker sliced its sales guidance.\r\nPfizer said late Friday it was cutting its 2023 revenue guidance range by … [+309 chars]"

  }, {
    "source": {
      "id": "the-wall-street-journal",
      "name": "The Wall Street Journal"
    },
    "author": "wsj",
    "title": "Veterinarians Confront Human Problem: Anti-Vaxxers...",
    "description": "Researchers ‘shocked’ by growing number of pet owners resisting routine shots",
    "url": "https://www.wsj.com/health/veterinarians-anti-vax-movement-pets-600fa7bb",
    "urlToImage": "https://images.wsj.net/im-864077/social",
    "publishedAt": "2023-10-14T14:00:03Z",
    "content": "Veterinarians Confront a Human Problem: Anti-VaxxersBy Oct. 14, 2023 8:32 am ET\r\nThe anti-vaccination movement is spreading—to pet owners.Copyright ©2023 Dow Jones & Company, Inc. All Rights Reserved… [+573 chars]"
  }, {
    "source": {
      "id": "the-wall-street-journal",
      "name": "The Wall Street Journal"
    },
    "author": "Mary Harrington",
    "title": "Smartphones Turbocharge Porn...",
    "description": "Since the 1960s, the taboo against pornography has almost disappeared. Now that it’s easily available to anyone with a phone, the personal and societal costs can no longer be denied.",
    "url": "https://www.wsj.com/tech/smartphones-have-turbocharged-the-danger-of-porn-a701eeaf",
    "urlToImage": "https://images.wsj.net/im-867463/social",
    "publishedAt": "2023-10-14T12:43:37Z",
    "content": "A generation ago, the debate over pornography served as a proxy for broader American anxieties about the sexual revolution. That cultural change was made possible by a technological innovation: the b… [+548 chars]"
  },]
  constructor() {
    super()
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResults: 0
    }
  }
  async updateNews() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles, //pasreddata same down
      totalResults: parsedData.totalResults, loading: false
    })
    this.props.setProgress(100)

  }
  async componentDidMount() {
    this.updateNews()

  }

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 })
    this.updateNews()
  }
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 })
    this.updateNews()
  }
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 })
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=31970b9f423c4c1793851f53fd03fdaf&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true })
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles), //pasreddata same down
      totalResults: parsedData.totalResults, 
      loading: false
    })
  };
  render() {
    console.log("render");
    return (
      <>

        <h2 style={{ textAlign: 'center', margin: '30px',marginTop:'90px' }}>News week top headlines </h2>
        {/* {this.state.loading && <Spinner />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="row container main-thing" >
            {this.state.articles ? (
              this.state.articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    imageUrl={element.urlToImage ? element.urlToImage : defaultImage}
                    description={element.description ? element.description.slice(0, 80) : ""}
                    newsUrl={element.url}

                    date={element.publishedAt ? element.publishedAt : "recently"}
                    author={element.author ? element.author : "unknown"}
                  />
                </div>
              ))
            ) : null}
          </div>
        </InfiniteScroll>




      </>
    )
  }
}


export default news
