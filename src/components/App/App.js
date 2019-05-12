import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {
	Container, Menu, Card, Icon, Grid, Image,
} from 'semantic-ui-react';
import { Provider } from 'react-redux';

import configureStore from '../../store';


const store = configureStore(['test']);

const App = () => (
	<Provider store={store}>
		<Container>
			<Container>
				<Menu inverted color="blue">
					<Menu.Item as="a" header>
						<Image src="" alt="test" />
			Project Name
					</Menu.Item>
					<Menu.Item as="a">Home</Menu.Item>
				</Menu>
			</Container>
			<Container>
				<Menu>
					<Menu.Item as="a">
						Sarees
					</Menu.Item>
					<Menu.Item as="a">Shirting</Menu.Item>
					<Menu.Item as="a">Suiting</Menu.Item>
					<Menu.Item as="a">Saya</Menu.Item>
					<Menu.Item as="a">Blouse</Menu.Item>
					<Menu.Item as="a">Dhoti</Menu.Item>
				</Menu>
			</Container>
			<Grid>
				<Grid.Row>
					<Grid.Column width={4}>
						<Card fluid>
							<Image src="/images/avatar/large/matthew.png" />
							<Card.Content>
								<Card.Header>Matthew</Card.Header>
								<Card.Meta>
									<span className="date">Joined in 2015</span>
								</Card.Meta>
								<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
							</Card.Content>
							<Card.Content extra>

								<Icon name="user" />
			22 Friends
							</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card fluid>
							<Image src="/images/avatar/large/matthew.png" />
							<Card.Content>
								<Card.Header>Matthew</Card.Header>
								<Card.Meta>
									<span className="date">Joined in 2015</span>
								</Card.Meta>
								<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
							</Card.Content>
							<Card.Content extra>

								<Icon name="user" />
			22 Friends
							</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card fluid>
							<Image src="/images/avatar/large/matthew.png" />
							<Card.Content>
								<Card.Header>Matthew</Card.Header>
								<Card.Meta>
									<span className="date">Joined in 2015</span>
								</Card.Meta>
								<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
							</Card.Content>
							<Card.Content extra>

								<Icon name="user" />
			22 Friends
							</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card fluid>
							<Image src="/images/avatar/large/matthew.png" />
							<Card.Content>
								<Card.Header>Matthew</Card.Header>
								<Card.Meta>
									<span className="date">Joined in 2015</span>
								</Card.Meta>
								<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
							</Card.Content>
							<Card.Content extra>

								<Icon name="user" />
			22 Friends
							</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card fluid>
							<Image src="/images/avatar/large/matthew.png" />
							<Card.Content>
								<Card.Header>Matthew</Card.Header>
								<Card.Meta>
									<span className="date">Joined in 2015</span>
								</Card.Meta>
								<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
							</Card.Content>
							<Card.Content extra>

								<Icon name="user" />
			22 Friends
							</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card fluid>
							<Image src="/images/avatar/large/matthew.png" />
							<Card.Content>
								<Card.Header>Matthew</Card.Header>
								<Card.Meta>
									<span className="date">Joined in 2015</span>
								</Card.Meta>
								<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
							</Card.Content>
							<Card.Content extra>

								<Icon name="user" />
			22 Friends
							</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card fluid>
							<Image src="/images/avatar/large/matthew.png" />
							<Card.Content>
								<Card.Header>Matthew</Card.Header>
								<Card.Meta>
									<span className="date">Joined in 2015</span>
								</Card.Meta>
								<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
							</Card.Content>
							<Card.Content extra>

								<Icon name="user" />
			22 Friends
							</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card fluid>
							<Image src="/images/avatar/large/matthew.png" />
							<Card.Content>
								<Card.Header>Matthew</Card.Header>
								<Card.Meta>
									<span className="date">Joined in 2015</span>
								</Card.Meta>
								<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
							</Card.Content>
							<Card.Content extra>

								<Icon name="user" />
			22 Friends
							</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card fluid>
							<Image src="/images/avatar/large/matthew.png" />
							<Card.Content>
								<Card.Header>Matthew</Card.Header>
								<Card.Meta>
									<span className="date">Joined in 2015</span>
								</Card.Meta>
								<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
							</Card.Content>
							<Card.Content extra>

								<Icon name="user" />
			22 Friends
							</Card.Content>
						</Card>
					</Grid.Column>
					<Grid.Column width={4}>
						<Card fluid>
							<Image src="/images/avatar/large/matthew.png" />
							<Card.Content>
								<Card.Header>Matthew</Card.Header>
								<Card.Meta>
									<span className="date">Joined in 2015</span>
								</Card.Meta>
								<Card.Description>Matthew is a musician living in Nashville.</Card.Description>
							</Card.Content>
							<Card.Content extra>

								<Icon name="user" />
			22 Friends
							</Card.Content>
						</Card>
					</Grid.Column>

				</Grid.Row>
			</Grid>
		</Container>
	</Provider>
);

export default App;
