import {
  Component,
	Event,
	EventEmitter,
  h,
  Host,
	Prop
} from '@stencil/core';


@Component({
  tag: 'eos-test',
  styleUrl: 'test.scss',
  shadow: true,
})
export class Test
{
  @Prop() showDescription: boolean = false;
	@Prop() heading: string;
	@Prop() description: string;
	@Prop() url: string;

	@Event() eventLink: EventEmitter<any>;
  private handleUrlClick(e: Event, link: string) {
    e.preventDefault();
    this.eventLink.emit(link);
  }

	render() {
		return (
			<Host>
				<h1>eos-test works!</h1>
				<a
					href={this.url}
					onClick={(e) => this.handleUrlClick(e, this.url)}
					>
						<h2>{this.heading}</h2>
				</a>
				{this.showDescription
					? <p>{this.description}</p>
					: null
				}
			</Host>
		);
	}
}